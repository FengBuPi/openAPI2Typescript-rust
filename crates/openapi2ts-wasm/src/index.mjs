import { readFileSync, mkdirSync } from 'fs';
import { writeFileSync as fsWriteFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import https from 'https';

// 导入WASM模块
import init, { openapi2ts } from '../pkg/openapi2ts_wasm.js';

// Node.js提供的函数，供WASM调用
global.readFileSync = (path) => {
  try {
    return readFileSync(path, 'utf8');
  } catch (e) {
    throw new Error(`Failed to read file ${path}: ${e.message}`);
  }
};

global.writeFileSync = (path, content) => {
  try {
    // 确保目录存在
    const dir = dirname(path);
    mkdirSync(dir, { recursive: true });

    fsWriteFileSync(path, content, 'utf8');
    console.log(`文件已保存到: ${path}`);
  } catch (e) {
    console.error(`写入文件失败: ${e.message}`);
    throw new Error(`Failed to write file ${path}: ${e.message}`);
  }
};

global.fetchJson = async (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${e.message}`));
        }
      });
    }).on('error', (err) => {
      reject(new Error(`HTTP request failed: ${err.message}`));
    });
  });
};

async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const wasmPath = join(__dirname, '../pkg/openapi2ts_wasm_bg.wasm');
  const wasmBytes = readFileSync(wasmPath);

  await init({ module_or_path: wasmBytes });

  const configPath = pathToFileURL(join(__dirname, '../../openapi2ts.config.js')).href;
  const userConfig = (await import(configPath)).default;

  const config = {
    namespace: userConfig.namespace,
    schema_path: userConfig.schemaPath,
    declare_type: userConfig.declareType,
    servers_path: userConfig.serversPath,
    request_lib_path: userConfig.requestLibPath,
    custom_class_name: userConfig.customClassName ?? ((name) => name),
  };

  try {
    console.log('开始转换OpenAPI到TypeScript...');
    const generatedCode = await openapi2ts(config);
    if (generatedCode) {
      console.log('转换成功');
    } else {
      console.error('转换失败');
    }
  } catch (error) {
    console.error('操作失败:', error);
  }
}

// 如果直接运行此脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };
