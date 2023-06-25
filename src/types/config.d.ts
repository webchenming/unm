import type { KEYS_ENUM } from '../constant'
import type { LangKey } from './lang'

export type Paths = Record<Name, string>
export type Name = KEYS_ENUM.CONFIG_NAME | KEYS_ENUM.NPMRC_NAME

export interface Default {
  [x: string]: {
    value: string
    current?: boolean
  }
}

export interface Config {
  [KEYS_ENUM.LANG]: LangKey
  [KEYS_ENUM.USERS]: Default
  [KEYS_ENUM.REGISTRYS]: Default
}

export interface Npmrc {
  [KEYS_ENUM.REGISTRYS]: string
  [KEYS_ENUM.AUTH_TOKEN]: string
}

export type ConfigRes<N> = N extends KEYS_ENUM.CONFIG_NAME ? Config : Npmrc
