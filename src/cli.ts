#!/usr/bin/env node
import {
  addAction,
  useAction,
  listAction,
  langAction,
  removeAction,
} from "./command/action";
import { t } from "./utils";
import consola from "consola";
import { Command } from "commander";
import { version } from "../package.json";
import { initConfig } from "./command/config";

const program = new Command();
const lang = new Command();
const user = new Command();
const registry = new Command();

program
  .name("unm")
  .addHelpCommand(false)
  .helpOption("-h, --help", t("H"))
  .version(version, "-v, --version", t("V"));

program
  .command("init")
  .description(t("ID"))
  .option("-f, --force", t("IOF"), false)
  .action(({ force }) => {
    initConfig(force);
  });

lang
  .name("lang")
  .description(t("LD"))
  .addHelpCommand(false)
  .helpOption("-h, --help", t("H"))
  .argument("[lang]", t("LAL"))
  .action((lang) => {
    langAction(lang);
  });

user
  .name("user")
  .description(t("UD"))
  .addHelpCommand(false)
  .helpOption("-h, --help", t("H"));

user
  .command("list")
  .description(t("ULD"))
  .option("-s, --show", t("ULOS"), false)
  .action(({ show }) => {
    listAction("user", show);
  });

user
  .command("use")
  .description(t("UUD"))
  .argument("<name>", t("N"))
  .action((name) => {
    useAction("user", name);
  });

user
  .command("remove")
  .description(t("URD"))
  .argument("<name>", t("N"))
  .action((name) => {
    removeAction("user", name);
  });

user
  .command("add")
  .description(t("UAD"))
  .usage("<name> <value>")
  .argument("<name>", t("N"))
  .argument("<value>", t("UAAV"))
  .argument("[description]", t("D"))
  .action((name, value, description) => {
    addAction("user", name, value, description);
    consola.log(`$ unm user use ${name}`);
  });

registry
  .name("registry")
  .description(t("RD"))
  .addHelpCommand(false)
  .helpOption("-h, --help", t("H"));

registry
  .command("list")
  .description(t("RLD"))
  .action(() => {
    listAction("registry", true);
  });

registry
  .command("use")
  .description(t("RUD"))
  .argument("<name>", t("N"))
  .action((name) => {
    useAction("registry", name);
  });

registry
  .command("remove")
  .description(t("RRD"))
  .argument("<name>", t("N"))
  .action((name) => {
    removeAction("registry", name);
  });

registry
  .command("add")
  .description(t("RAD"))
  .usage("<name> <value>")
  .argument("<name>", t("N"))
  .argument("<value>", t("RAAV"))
  .argument("[description]", t("D"))
  .action((name, value, description) => {
    addAction("registry", name, value, description);
    consola.log(`$ unm registry use ${name}`);
  });

program.addCommand(lang);
program.addCommand(user);
program.addCommand(registry);
program.parse(process.argv);
