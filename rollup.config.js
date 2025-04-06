import terser from '@rollup/plugin-terser';
export default {
  input: 'src/storehouse.js',
  output: [
    {
      file: 'dist/storehouse.js',
      format: 'esm',
      name: 'Storehouse'
    },
    {
      file: 'dist/storehouse.min.js',
      format: 'esm',
      name: 'Storehouse',
      plugins: [terser()]
    }
  ]
};
