import { find, isUndefined } from 'lodash'

export * from './log'

export function line(str: string, len: number, symbol = '-') {
  return new Array(Math.max(2, len - str.length)).join(symbol)
}

/**
 * 字符串脱敏
 * @param str 字符串
 * @param count 数量
 * @param symbol 替换符号
 * @return 脱敏字符串
 */
export function desensitize(str: string, count?: number, symbol = '*') {
  if (typeof str !== 'string') {
    str = String(str)
  }
  const len = str.length
  count = count || len / 2
  const start = Math.floor((len - count) / 2)
  const end = start + count
  const slice = str.slice(start, end)
  return str.replace(slice, symbol.repeat(count))
}

export function verify(obj: object) {
  return find(obj, (val) => isUndefined(val))
}
