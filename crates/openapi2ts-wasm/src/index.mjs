import { readFileSync, mkdirSync } from 'fs';
import { writeFileSync as fsWriteFileSync } from 'fs';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

// 导入WASM模块
import init, { openapi2ts } from '../pkg/openapi2ts_wasm.js';

// Node.js提供的函数，供WASM调用
global.readFileSync = (path) => {
  try {
    return readFileSync(path, 'utf8');
  } catch (e) {
    throw new Error(`读取文件失败: ${path} 失败原因: ${e.message}`);
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
    throw new Error(`写入文件失败: ${path}: ${e.message}`);
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
          reject(new Error(`解析JSON失败: ${e.message}`));
        }
      });
    }).on('error', (err) => {
      reject(new Error(`HTTP请求失败: ${err.message}`));
    });
  });
};

async function getUserConfig() {
  let userConfig;
  try {
    // 从cwd获取配置文件
    const configPath = path.resolve(process.cwd(), 'openapi2ts.config.js');
    userConfig = (await import(configPath)).default;

    // 将配置文件中的相对路径转换为绝对路径
    userConfig = {
      ...userConfig,
      schemaPath: path.resolve(path.dirname(configPath), userConfig.schemaPath),
      serversPath: path.resolve(path.dirname(configPath), userConfig.serversPath),
    };
  } catch (error) {
    console.error('读取openapi2ts.config.js配置失败:', error);
    process.exit(1);
  }
  return userConfig;
}

async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const wasmPath = join(__dirname, '../pkg/openapi2ts_wasm_bg.wasm');
  const wasmBytes = readFileSync(wasmPath);

  await init({ module_or_path: wasmBytes });

  const userConfig = await getUserConfig();

  const wasmConfig = {
    namespace: userConfig.namespace,
    schema_path: userConfig.schemaPath,
    declare_type: userConfig.declareType,
    servers_path: userConfig.serversPath,
    request_lib_path: userConfig.requestLibPath,
    custom_class_name: userConfig.customClassName,
  };

  try {
    console.log('开始转换OpenAPI到TypeScript...');
    const generatedCode = await openapi2ts(wasmConfig);
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
