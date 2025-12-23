#!/usr/bin/env node
import path from 'path';
import { cosmiconfig } from 'cosmiconfig';
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
    console.error('读取 openapi2ts.config 配置失败:', err.message);
    if (err.stack) console.error(err.stack);
    process.exit(1);
  }
}

(async () => {
  const [configPath, config] = await getUserConfig();
  await openapi2ts(configPath, config);
})();