import pkg from './package'

export default {
 input: 'ui/index.js',
 output: [
  {
   file: 'dist/js/sws.min.js',
   format: 'umd'
  },
 ],
 external: [
  ...Object.keys(pkg.dependencies || {})
 ],
 plugins: [
  typescript({
   typescript: require('typescript'),
   include: [ "src/*.ts+(|x)" ],
   verbosity: 3
  }),
  terser(), // minifies generated bundles
  less({
    insert: true,
    output: 'dist/json-formatter.css'
  }),
 ]
};
