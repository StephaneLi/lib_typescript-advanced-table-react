import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import json from "@rollup/plugin-json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: [
    'src/lib/index.tsx'
  ],
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    json()
  ],
  external: ['react', 'react-dom']
}