import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = [ '.js', '.jsx', '.ts', '.tsx' ];
const packageName = 'hogePackage';

export default {
  input: './src/index.ts',
  output: [
    {
      // CommonJS
      file: `dist/${packageName}.js`,
      format: 'cjs',
    },
    {
      // ES Module
      file: `dist/${packageName}.esm.js`,
      format: 'es',
    },
    {
      // min.js
      file: `dist/${packageName}.min.js`,
      format: 'iife',
      name: packageName,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions,
    }),
    commonjs(),
    babel({
      extensions,
      include: ['src/**/*'],
    })
  ],
};