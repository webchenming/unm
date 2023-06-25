import type { langKeys } from '../lang'

export interface Message {
  lang: string
  lang_1: string
  help: string
  command: string
  options: string
  version: string
  init_cofig: string
  switch_0: string
  switch_1: string
  current_0: string
  save_0: string
  delete: string
  registry_0: string
  registry_1: string
  add_registry: string
  user_0: string
  user_1: string
  add_user: string
  reset_config: string
  view_user: string
  view_user_1: string
  view_registry: string
  switch_registry: string
  switch_user: string
  add_user_1: string
  add_registry_1: string
  use_registry: string
  delete_registry: string
  use_user: string
  delete_user: string
  empty: string
}
export type MessageKey = keyof Message
export type LangKey = (typeof langKeys)[number]
export type Lang = Record<LangKey, Message>
