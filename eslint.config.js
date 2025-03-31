import pluginJs from '@eslint/js'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { ignores: ['dist/'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  pluginPrettier,
]
