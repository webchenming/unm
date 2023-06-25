import { defineConfig } from 'rollup'

// import terser from '@rollup/plugin-terser'
import copy from 'rollup-plugin-copy'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import externals from 'rollup-plugin-node-externals'

export default defineConfig({
  input: './src/index.ts',
  treeshake: true,
  output: {
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
    file: './dist/index.js',
  },
  plugins: [
    resolve({ extensions: ['.ts', '.d.ts'] }),
    externals({ devDeps: false }),
    typescript(),
    // terser(),
    copy({
      targets: [{ src: './src/types/', dest: './dist/' }],
      verbose: true,
    }),
    json(),
  ],
})
