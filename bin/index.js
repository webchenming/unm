#!/usr/bin/env node

const { Command } = require('commander')
const pkg = require('../package.json')
const {
  getMessage,
  setLang,
  getRegistrys,
  getUsers,
  useRegistry,
  useUser,
  addUser,
  addRegistry,
  unRegistry,
  unUser,
} = require('../dist')

const program = new Command()

program
  .usage('<command> [options]')
  .helpOption('-h, -help', getMessage('help'))
  .version(pkg.version, '-v, -version', getMessage('version'))

program.command('l <lang>').description(getMessage('lang')).action(setLang)

program
  .command('lr')
  .description(getMessage('view_registry'))
  .action(getRegistrys)

program
  .command('ur <name>')
  .description(getMessage('use_registry'))
  .action(useRegistry)

program
  .command('ar <name> <url>')
  .description(getMessage('add_registry_1'))
  .action(addRegistry)

program
  .command('rr <name>')
  .description(getMessage('delete_registry'))
  .action(unRegistry)

program
  .command('lu')
  .option('-s,--show', getMessage('view_user_1'))
  .description(getMessage('view_user'))
  .action(getUsers)

program.command('uu <name>').description(getMessage('use_user')).action(useUser)

program
  .command('au <name> <token>')
  .description(getMessage('add_user_1'))
  .action(addUser)

program
  .command('ru <name>')
  .description(getMessage('delete_user'))
  .action(unUser)

program.parse(process.argv)
