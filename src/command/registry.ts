import { forEach, get, has, join, map, set, unset } from 'lodash'

import { KEYS_ENUM } from '../constant'
import { colors, line, log } from '../utils'
import { getConfig, getMessage, setConfig } from './config'

/**
 * 获取NPM源列表
 * @returns string
 */
export function getRegistrys() {
  const config = getConfig(KEYS_ENUM.CONFIG_NAME)
  const registrys = get(config, [KEYS_ENUM.REGISTRYS])
  if (registrys) {
    const list = join(
      map(registrys, ({ value, current }, name) => {
        if (current) {
          return colors.green(`* ${name} ${line(name, 20)} ${value}`)
        }
        return `  ${name} ${line(name, 20)} ${value}`
      }),
      '\n',
    )
    log.info(list)
  }
  else {
    log.error(colors.red(getMessage('registry_0')))
  }
}

/**
 * 使用NPM源
 * @param name 名称
 */
export function useRegistry(name: string) {
  const config = getConfig(KEYS_ENUM.CONFIG_NAME)
  const npmrc = getConfig(KEYS_ENUM.NPMRC_NAME)
  const registrys = get(config, [KEYS_ENUM.REGISTRYS])

  if (has(registrys, [name])) {
    forEach(registrys, (_, name) => unset(registrys, [name, 'current']))
    const curRegistry = get(registrys, [name])

    set(registrys, [name], { ...curRegistry, current: true })
    setConfig(KEYS_ENUM.CONFIG_NAME, config)

    set(npmrc, [KEYS_ENUM.REGISTRY], curRegistry.value)
    setConfig(KEYS_ENUM.NPMRC_NAME, npmrc)

    log.success(`${getMessage('switch_1')} ${name}`)
  }
  else {
    log.error(getMessage('registry_1'))
  }
}

/**
 * 添加NPM源
 * @param name 名称
 * @param value 地址
 */
export function addRegistry(name: string, value: string) {
  const config = getConfig(KEYS_ENUM.CONFIG_NAME)
  const registrys = get(config, [KEYS_ENUM.REGISTRYS])

  if (!has(registrys, [name])) {
    set(config, [KEYS_ENUM.REGISTRYS, name], { value })
    setConfig(KEYS_ENUM.CONFIG_NAME, config)

    log.success(`${name} ${getMessage('add_registry')}`)
  }
  else {
    log.error(getMessage('save_0'))
  }
}

/**
 * 删除NPM源
 * @param name 名称
 */
export function unRegistry(name: string) {
  const config = getConfig(KEYS_ENUM.CONFIG_NAME)
  const registrys = get(config, [KEYS_ENUM.REGISTRYS])
  if (has(registrys, [name])) {
    unset(registrys, [name])
    setConfig(KEYS_ENUM.CONFIG_NAME, config)

    log.success(`${name} ${getMessage('delete')}`)
  }
  else {
    log.error(getMessage('registry_1'))
  }
}
