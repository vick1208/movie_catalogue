import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';


export default [
  { languageOptions: { globals: globals.browser }, },
  pluginJs.configs.recommended,
  daStyle,
  {
    ignores:['webpack.*.js', '**/node_modules/', '**/dist/']
  }
];