import { forEach, get, has, join, map, set, unset } from 'lodash'

import { KEYS_ENUM } from '../constant'
import { colors, desensitize, line, log } from '../utils'
import { getConfig, getMessage, setConfig } from './config'

/**
 * 获取用户列表
 * @param flag 脱敏
 */
export function getUsers({ show }: { show: boolean }) {
  const config = getConfig(KEYS_ENUM.CONFIG_NAME)
  const users = get(config, [KEYS_ENUM.USERS])
  if (users) {
    log.info(
      join(
        map(users, ({ value, current }, name) => {
          if (current) {
            return colors.green(
              `* ${name} ${line(name, 20)} ${show ? value : desensitize(value)}`,
            )
          }
          return `  ${name} ${line(name, 20)} ${
            show ? value : desensitize(value)
          }`
        }),
        '\n',
      ),
    )
  }
  else {
    log.error(colors.red(getMessage('user_1')))
  }
}

/**
 * 使用用户
 * @param name 名称
 */
export function useUser(name: string) {
  const config = getConfig(KEYS_ENUM.CONFIG_NAME)
  const npmrc = getConfig(KEYS_ENUM.NPMRC_NAME)
  const users = get(config, [KEYS_ENUM.USERS])

  if (has(users, [name])) {
    forEach(users, (_, name) => unset(users, [name, 'current']))
    const curUser = get(users, [name])

    set(users, [name], { ...curUser, current: true })
    setConfig(KEYS_ENUM.CONFIG_NAME, config)

    set(npmrc, [KEYS_ENUM.AUTH_TOKEN], curUser.value)
    setConfig(KEYS_ENUM.NPMRC_NAME, npmrc)

    log.success(`${getMessage('switch_1')} ${name}`)
  }
  else {
    log.error(getMessage('user_0'))
  }
}

export function addUser(name: string, value: string) {
  const config = getConfig(KEYS_ENUM.CONFIG_NAME)
  const users = get(config, [KEYS_ENUM.USERS])
  if (!has(users, [name])) {
    set(config, [KEYS_ENUM.USERS, name], { value })
    setConfig(KEYS_ENUM.CONFIG_NAME, config)
    log.success(`${name} ${getMessage('add_user')}`)
  }
  else {
    log.error(getMessage('save_0'))
  }
}

export function unUser(name: string) {
  const config = getConfig(KEYS_ENUM.CONFIG_NAME)
  const user = get(config, [KEYS_ENUM.USERS])
  if (has(user, [name])) {
    unset(user, [name])
    setConfig(KEYS_ENUM.CONFIG_NAME, config)

    log.success(`${name} ${getMessage('delete')}`)
  }
  else {
    log.error(getMessage('user_0'))
  }
}
