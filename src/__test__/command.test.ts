import { describe, expect, test } from 'vitest'

import { KEYS_ENUM } from '../constant'
import { getConfig, getMessage, initConfig, setConfig } from '../command'

describe('操作配置', () => {
  test('初始化配置文件', () => {
    initConfig()
  })

  test('获取配置文件', () => {
    const unmrc = getConfig(KEYS_ENUM.CONFIG_NAME)
    expect(unmrc)

    const npmrc = getConfig(KEYS_ENUM.NPMRC_NAME)
    expect(npmrc)
  })

  test('获取信息', () => {
    const message = getMessage('help')
    expect(message).toMatchInlineSnapshot('"查看帮助"')
  })

  test('设置配置项', () => {
    const config = getConfig(KEYS_ENUM.CONFIG_NAME)
    setConfig(KEYS_ENUM.CONFIG_NAME, { ...config, lang: 'zh' })
    const lang = getMessage('lang')
    expect(lang).toMatchInlineSnapshot('"切换语言"')
  })

  test('重置配置项', () => {
    // resetConfig()
  })
})

describe('操作NPM源', () => {
  test('使用NPM源', () => {
    // useRegistry('npm')
    // getRegistrys()
  })

  test('添加NPM源', () => {
    // addRegistry('test', 'http://0.0.0.0')
    // getRegistrys()
  })

  test('删除NPM源', () => {
    // unRegistry('test')
    // getRegistrys()
  })
})

describe('操作账号', () => {
  test('使用账号', () => {
    // useUser('webchenming')
    // getUsers(true)
  })

  test('添加账号', () => {
    // addUser('test', '123456789')
    // getUsers(true)
  })

  test('删除账号', () => {
    // unUser('test')
  })
})
