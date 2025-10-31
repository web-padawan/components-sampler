import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/playground.js',
  output: {
    sourcemap: false,
    format: 'es',
    name: 'playground',
    dir: 'dist/assets',
  },
  plugins: [
    nodeResolve()
  ]
}
