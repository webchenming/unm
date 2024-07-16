import { get } from "lodash-es";
import language from "./language";
import { getUnmrc } from "./command/config";
import type { LanguageKey } from "./types/language";

export function t(key: LanguageKey, value = "") {
  const unmrc = getUnmrc();
  const lang = get(language, [unmrc.lang]);
  const text = get(lang, [key]);
  return text.replace(/\{(\w+)\}/g, value);
}

export function placeholderFn(str: string, len = 20, symbol = "-") {
  return new Array(Math.max(2, len - str.length)).join(symbol);
}

export function desensitizeFn(str: string, flag = false, symbol = "*") {
  if (flag) {
    return str;
  }
  if (typeof str !== "string") {
    str = String(str);
  }
  const len = str.length;
  const count = len / 2;
  const start = Math.floor((len - count) / 2);
  const end = start + count;
  const slice = str.slice(start, end);
  return str.replace(slice, symbol.repeat(count));
}

export function descriptionFn(str?: string) {
  return str ? "(" + str + ")" : "";
}
