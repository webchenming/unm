import type { Lang } from '../types'

export const langKeys = ['zh', 'en'] as const

export const lang: Lang = {
  zh: {
    lang: '切换语言',
    lang_1: '只支持 zh 或 en',
    help: '查看帮助',
    command: '命令',
    options: '选项',
    version: '查看版本',
    init_cofig: '初始化成功!',
    switch_0: '语言切换成功',
    switch_1: '已切换至',
    current_0: '当前使用',
    save_0: '名称在列表中已存',
    delete: '已被删除',
    reset_config: '配置文件已重置',
    empty: '不能为空',

    add_registry: '添加成功!\n提示: 可以通过 unm ur <name> 命令进行使用',
    registry_0:
      '名称不存在.\n提示: 可以通过 unm ar <name> <token> 命令进行添加.',
    registry_1: '列表为空.\n提示: 可以通过 unm ar <name> <token> 命令进行添加.',
    view_registry: '查看 npm 源列表',
    switch_registry: '切换 npm 源',
    add_registry_1: '添加 npm 源',
    use_registry: '使用 npm 源',
    delete_registry: '删除 npm 源',

    user_0:
      '名称不存在.\n提示: 可以通过 unm au <name> <token> 命令进行添加. https://docs.npmjs.com/getting-started',
    user_1:
      '列表为空.\n提示: 可以通过 unm au <name> <token> 命令进行添加. https://docs.npmjs.com/getting-started',
    add_user:
      '添加成功!\n提示: 可以通过 unm uu <name> 命令进行使用',
    view_user: '查看 npm 用户列表',
    view_user_1: '查看完整的 npm 用户列表',
    switch_user: '切换 npm 用户',
    add_user_1: '添加 npm 用户',
    use_user: '使用 npm 用户',
    delete_user: '删除 npm 用户',
  },
  en: {
    lang: 'language switch',
    lang_1: 'Only zh or en is supported',
    help: 'view help',
    command: 'command',
    options: 'options',
    version: 'view version',
    init_cofig: 'initialization successful!',
    switch_0: 'language switch successful!',
    switch_1: 'switched to',
    current_0: 'current usage',
    save_0: 'The name already exists in the list.',
    delete: 'been deleted',
    empty: 'cannot be empty',

    reset_config: 'The configuration file has been reset',
    registry_0:
      'Name does not exist.\nHint: You can added with the unm ar <name> <token> command.',
    registry_1:
      'The list is empty.\nHint: You can be added with the unm ar <name> <token> command.',
    add_registry:
      'added success!\n Tip: You can be used by the unm ur <name> command',
    view_registry: 'view the npm source list',
    switch_registry: 'switch the npm source',
    add_registry_1: 'add the npm source',
    use_registry: 'use the npm source',
    delete_registry: 'delete the npm source',

    user_0:
      'Name does not exist.\nHint: You can added with the unm au <name> <token> command.',
    user_1:
      'The list is empty.\nHint: You can be added with the unm au <name> <token> command.',
    add_user:
      'added success!\n Tip: You can be used by the unm uu <name> command',
    view_user: 'view the npm user list',
    view_user_1: 'see the complete list of npm users',
    switch_user: 'switch the npm user',
    add_user_1: 'add the npm user',
    use_user: 'use the npm user',
    delete_user: 'delete the npm user',
  },
}
