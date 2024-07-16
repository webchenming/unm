import { Unmrc } from "./types/config";

export const UNM_CONFIG: Unmrc = {
  lang: "zhCh",
  user: {},
  registry: {
    npm: {
      value: "https://registry.npmjs.org/",
      description: "官方源",
    },
    mirror: {
      value: "https://skimdb.npmjs.com/registry/",
      description: "官方镜像源",
    },
    taobao: {
      value: "https://registry.npmmirror.com/",
      description: "淘宝镜像源",
    },
    cnpm: {
      value: "http://r.cnpmjs.org/",
      description: "淘宝镜像源",
    },
    yarn: {
      value: "https://registry.yarnpkg.com/",
      description: "yarn镜像源",
    },
  },
};
