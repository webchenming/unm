import type language from "../language";

export interface Unmrc {
  lang: keyof typeof language;
  user: Record<
    string,
    {
      value: string;
      current?: boolean;
      description?: string;
    }
  >;
  registry: Record<
    string,
    {
      value: string;
      current?: boolean;
      description?: string;
    }
  >;
}

export interface Npmrc {
  registry?: string;
  "//registry.npmjs.org/:_authToken"?: string;
}

export type UnmrcKey = keyof Omit<Unmrc, "lang">;
