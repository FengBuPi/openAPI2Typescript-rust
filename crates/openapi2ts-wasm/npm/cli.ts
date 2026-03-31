#!/usr/bin/env node
import path from 'path';
import { cosmiconfig, defaultLoaders } from 'cosmiconfig';
import type { CosmiconfigResult } from 'cosmiconfig';
import { openapi2ts } from './index.js';
import type { Config } from './openapi2ts-wasm.js';
import { pathToFileURL } from 'url';
import { createRequire } from 'module';

type filePath = string

async function getUserConfig(): Promise<[filePath, Config]> {
  const require = createRequire(import.meta.url);
  try {
    const explorer = cosmiconfig('openapi2ts', {
      searchPlaces: [
        'openapi2ts.config.ts',
        'openapi2ts.config.mjs',
        'openapi2ts.config.cjs',
        'openapi2ts.config.js',
      ],
      loaders: {
        '.mjs': async (filepath) => {
          const mod = await import(pathToFileURL(filepath).href);
          return mod.default ?? mod;
        },
        '.js': async (filepath) => {
          const mod = await import(pathToFileURL(filepath).href);
          return mod.default ?? mod;
        },
        '.cjs': (filepath) => {
          const mod = require(filepath);
          return mod?.default ?? mod;
        },
        '.ts': async (filepath, content) => {
          // 复用 cosmiconfig 内置的 TypeScript loader 做编译，再兼容 default / module.exports 两种导出
          const loaded = await defaultLoaders['.ts'](filepath, content);
          // loaded 可能是 ESM default，也可能是 CommonJS 导出
          // 这里再做一层 default 合并，统一成配置对象
          if (loaded && typeof loaded === 'object' && 'default' in (loaded as any)) {
            return (loaded as any).default ?? loaded;
          }
          return loaded;
        },
      },
    });

    const searchResult: CosmiconfigResult = await explorer.search();
    if (!searchResult) throw new Error('searchConfig为空，未找到 openapi2ts.config');

    // 如果是esm模块需要从default属性获取配置
    const rawConfig = (searchResult.config && typeof searchResult.config === 'object' && 'default' in searchResult.config)
      ? searchResult.config.default
      : searchResult.config;

    if (!rawConfig) throw new Error('rawConfig为空，未找到 openapi2ts.config');

    const configFilePath = String(searchResult.filepath);
    const config: Config = {
      ...rawConfig,
      serversPath: path.resolve(path.dirname(configFilePath), rawConfig.serversPath),
    };

    console.log('读取 openapi2ts.config 配置成功:', config);
    return [configFilePath, config];
  } catch (e) {
    const err = e instanceof Error ? e : new Error(String(e));
    throw new Error(`读取 openapi2ts.config 配置失败: ${err.message}`);
  }
}

(async () => {
  try {
    const [configPath, config] = await getUserConfig();
    await openapi2ts(configPath, config);
  } catch (e) {
    const err = e instanceof Error ? e : new Error(String(e));
    console.error(err.message);
    if (err.stack) console.error(err.stack);
    process.exitCode = 1;
  }
})();