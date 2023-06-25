import colors from 'colors'

export const log = {
  info: (...args: string[]) => console.log(colors.black(args.join(' '))),
  error: (...args: string[]) => console.log(colors.red(args.join(' '))),
  success: (...args: string[]) => console.log(colors.green(args.join(' '))),
}

export { colors }
