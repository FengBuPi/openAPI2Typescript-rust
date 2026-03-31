import { readFileSync, mkdirSync, writeFileSync as fsWriteFileSync, rmSync } from 'fs';
import path, { dirname } from 'path';
import https from 'https';
import swagger2openapi from 'swagger2openapi';
import { openapi2ts as openapi2tsWasm } from './pkg/openapi2ts_wasm.js';
import type { OpenAPIV2 } from "openapi-types";
import type { Config } from './openapi2ts-wasm.js';

type filePath = string

async function fetchJsonString(url: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';

        res.on('data', (chunk: Buffer | string) => {
          data += typeof chunk === 'string' ? chunk : chunk.toString('utf8');
        });

        res.on('end', () => {
          resolve(data);
        });
      })
      .on('error', (err) => {
        reject(new Error(`HTTP请求失败: ${(err as Error).message}`));
      });
  });
}

async function loadOpenApiJson(configPath: filePath, schemaPath: string): Promise<string> {
  try {
    // 网络地址加载
    if (schemaPath.startsWith('http')) {
      return await fetchJsonString(schemaPath);
    }
    // 本地文件加载
    return readFileSync(path.resolve(path.dirname(configPath), schemaPath), 'utf8');
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    throw new Error(`加载 openapi 文件失败: ${err.message}`);
  }
}

async function swaggerToOpenapi(openapiJson: OpenAPIV2.Document) {
  try {
    let { openapi } = await swagger2openapi.convert(openapiJson, {
      patch: true
    });
    console.log('swagger 转换为 openapi 成功:');
    return JSON.stringify(openapi)
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    throw new Error(`swagger 转换为 openapi 失败: ${err.message}`);
  }
}


/*
 * @author: xuhaifeng
 * @description: 转换openapi到typescript
 * @param configPath 配置文件路径 
 * @param config 配置
 */
async function openapi2ts(configPath: filePath, config: Config) {
  // 加载openapi json
  let openapiJson = await loadOpenApiJson(configPath, config.schemaPath);
  // 如果是swagger json，转换为openapi json
  if (config.isSwagger) {
    openapiJson = await swaggerToOpenapi(JSON.parse(openapiJson));
  }
  // 调用OpenAPI数据初始化后的钩子
  if (config.afterOpenApiDataInited) {
    openapiJson = JSON.stringify(config.afterOpenApiDataInited(JSON.parse(openapiJson)));
  }
  // 生成前先删除旧文件，避免出现残留内容/权限相关的奇怪问题
  try {
    rmSync(config.serversPath, { recursive: true, force: true });
  } catch (e) {
    console.warn(`删除旧文件失败，仍将继续覆盖写入: ${config.serversPath}`, e);
  }
  try {
    console.log('开始转换OpenAPI到TypeScript...');
    const generatedCode = await openapi2tsWasm(openapiJson, config);
    if (generatedCode) {
      console.log('转换成功');
    } else {
      throw new Error('转换失败');
    }
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    throw new Error(`操作失败: ${err.message}`);
  }
}

export { openapi2ts };
export default openapi2ts;

globalThis.writeFileSync = (filePath: string, content: string) => {
  try {
    // 确保目录存在
    const dir = dirname(filePath);
    mkdirSync(dir, { recursive: true });

    fsWriteFileSync(filePath, content, 'utf8');
    console.log(`文件已保存到: ${filePath}`);
  } catch (e) {
    const err = e as Error;
    console.error(`写入文件失败: ${err.message}`);
    throw new Error(`写入文件失败: ${filePath}: ${err.message}`);
  }
}