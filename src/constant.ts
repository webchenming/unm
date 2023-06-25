import { homedir } from 'node:os'
import { resolve } from 'node:path'

import type { Config, Paths } from './types'

import registrys from './registrys.json'

export enum KEYS_ENUM {
  LANG = 'lang',
  USERS = 'users',
  NPMRC_NAME = 'npmrc',
  CONFIG_NAME = 'unmrc',
  REGISTRY = 'registry',
  REGISTRYS = 'registrys',
  AUTH_TOKEN = '//registry.npmjs.org/:_authToken',
}

export const rootPath = homedir()

export const paths: Paths = {
  [KEYS_ENUM.NPMRC_NAME]: resolve(rootPath, `.${KEYS_ENUM.NPMRC_NAME}`),
  [KEYS_ENUM.CONFIG_NAME]: resolve(rootPath, `.${KEYS_ENUM.CONFIG_NAME}`),
}

export const config: Config = {
  [KEYS_ENUM.LANG]: 'zh',
  [KEYS_ENUM.USERS]: {},
  [KEYS_ENUM.REGISTRYS]: registrys,
}
