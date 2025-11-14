import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/sampler.js',
  output: {
    sourcemap: false,
    format: 'es',
    name: 'sampler',
    dir: 'dist/assets',
  },
  plugins: [
    nodeResolve()
  ]
}
