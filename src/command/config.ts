import chalk from "chalk";
import consola from "consola";
import { homedir } from "os";
import { resolve } from "path";
import { parse, stringify } from "ini";
import { existsSync, writeFileSync, readFileSync } from "fs";

import { t } from "../utils";
import { UNM_CONFIG } from "../config";
import type { Npmrc, Unmrc } from "../types/config";

const npmrcPath = resolve(homedir(), ".npmrc");
const unmrcPath = resolve(homedir(), ".unmrc");

// 初始化配置文件
export function initConfig(force: boolean) {
  if (!existsSync(unmrcPath) || force) {
    setUnmrc(UNM_CONFIG);
    consola.log(chalk.green(unmrcPath, t("IS")));
  }
  if (!existsSync(npmrcPath)) {
    setNpmrc({});
    consola.log(chalk.green(npmrcPath, t("IS")));
  }
}

// 操作 .npmrc 文件
export function getNpmrc() {
  return parse(readFileSync(npmrcPath, "utf-8")) as Npmrc;
}
export function setNpmrc(config: Npmrc) {
  writeFileSync(npmrcPath, stringify(config), "utf-8");
}

// 操作 .unmrc 文件
export function getUnmrc() {
  return parse(readFileSync(unmrcPath, "utf-8")) as Unmrc;
}
export function setUnmrc(config: Unmrc) {
  writeFileSync(unmrcPath, stringify(config), "utf-8");
}
