import { writeFile } from 'node:fs/promises'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { parse, stringify } from 'ini'
import { get, mapValues } from 'lodash'

import { log } from '../utils'
import { lang, langKeys } from '../lang'
import { KEYS_ENUM, config, paths } from '../constant'
import type { ConfigRes, LangKey, MessageKey, Name } from '../types'
/**
 * 初始配置文件
 */
export function initConfig() {
  mapValues(paths, async (path) => {
    if (!existsSync(path)) {
      const isPath = path.includes(KEYS_ENUM.CONFIG_NAME)
      const content = isPath ? stringify(config) : ''
      await writeFile(path, content, 'utf-8')
    }
  })
}

/**
 * 设置配置文件
 * @param name Name
 * @param config Config
 */
export function setConfig<N extends Name>(name: N, config: ConfigRes<N>) {
  if (name && config) {
    writeFileSync(paths[name], stringify(config), 'utf-8')
  }
}

/**
 * 获取配置文件
 * @param name Name
 * @returns ConfigRes<Config | { [key:string]: any }>
 */
export function getConfig<N extends Name>(name: N) {
  const content = readFileSync(paths[name], 'utf-8')
  return parse(content) as ConfigRes<N>
}

/**
 * 获取信息
 * @param key Message Key
 * @returns string
 */
export function getMessage(key: MessageKey) {
  const config = getConfig(KEYS_ENUM.CONFIG_NAME)
  return get(lang, [config.lang, key])
}

/**
 * 重置设置
 */
export function resetConfig() {
  setConfig(KEYS_ENUM.CONFIG_NAME, config)
  log.success(getMessage('reset_config'))
}

/**
 * 设置语言
 * @param lang 语言
 */
export function setLang(lang: LangKey) {
  if (langKeys.includes(lang)) {
    const config = getConfig(KEYS_ENUM.CONFIG_NAME)
    setConfig(KEYS_ENUM.CONFIG_NAME, { ...config, lang })
    log.success(`${getMessage('switch_1')} ${lang}`)
  }
  else {
    log.error(getMessage('lang_1'))
  }
}
