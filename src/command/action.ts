import chalk from "chalk";
import consola from "consola";
import language from "../language";
import type { UnmrcKey } from "../types/config";
import { getNpmrc, setNpmrc, getUnmrc, setUnmrc } from "./config";
import { has, get, set, unset, some, forEach, isEmpty } from "lodash-es";
import { placeholderFn, desensitizeFn, descriptionFn, t } from "../utils";

export function addAction(
  key: UnmrcKey,
  name: string,
  value: string,
  description?: string
) {
  const unmrc = getUnmrc();
  if (description) {
    set(unmrc, [key, name], { value, description });
    setUnmrc(unmrc);
  } else {
    set(unmrc, [key, name], { value });
    setUnmrc(unmrc);
  }
  consola.log(chalk.green(t("AS")));
}

export function useAction(key: UnmrcKey, name: string) {
  const unmrc = getUnmrc();
  const npmrc = getNpmrc();
  const list = get(unmrc, key);
  const value = get(list, [name, "value"]);
  const fn = () => {
    forEach(list, (value) => unset(value, ["current"]));
    set(unmrc, [key, name, "current"], true);
    setUnmrc(unmrc);
    consola.log(chalk.green(t("US")));
  };
  if (key === "user" && value) {
    set(npmrc, ["//registry.npmjs.org/:_authToken"], value);
    setNpmrc(npmrc);
    fn();
  } else if (key === "registry" && value) {
    set(npmrc, ["registry"], value);
    setNpmrc(npmrc);
    fn();
  } else {
    consola.log(chalk.red(t("NE")));
  }
}

export function removeAction(key: UnmrcKey, name: string) {
  const unmrc = getUnmrc();
  const list = get(unmrc, key);
  if (has(list, name)) {
    unset(unmrc, [key, name]);
    setUnmrc(unmrc);
    consola.log(chalk.green(t("RS")));
  } else {
    consola.log(chalk.red(t("NE")));
  }
}

export function listAction(key: UnmrcKey, show: boolean) {
  const unmrc = getUnmrc();
  const list = get(unmrc, key);
  if (isEmpty(list)) {
    consola.log(chalk.red(t("LE")));
    consola.log(`$ unm ${key} add <name> <value>`);
  } else {
    forEach(list, (item, name) => {
      const placeholder = placeholderFn(name);
      const desensitize = desensitizeFn(item.value, show);
      const description = descriptionFn(item.description);
      const value = `${name} ${placeholder} ${desensitize} ${description}`;
      if (item.current) {
        consola.success(chalk.green(value));
      } else {
        consola.info(value);
      }
    });
  }
}

export function langAction(lang?: string) {
  const unmrc = getUnmrc();
  if (some(language, (_, name) => name === lang)) {
    set(unmrc, ["lang"], lang);
    setUnmrc(unmrc);
    consola.log(chalk.green(t("LS", lang)));
  } else {
    forEach(language, (_, name) => {
      if (name === unmrc.lang) {
        consola.success(chalk.green(name));
      } else {
        consola.info(name);
      }
    });
  }
}
