import { test } from "vitest";

import { initConfig } from "../src/command/config";

test("init config", () => {
  initConfig(false);
});
