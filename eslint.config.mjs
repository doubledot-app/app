import {fixupPluginRules} from '@eslint/compat';
import eslint from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        parser: tsEslint.parser,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'react-hooks': fixupPluginRules(hooksPlugin),
      react: reactPlugin
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // For React 17+
      'react/prop-types': 'off', // Since we're using TypeScript for type checking
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-namespace': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to'],
          aspects: ['noHref', 'invalidHref', 'preferButton']
        }
      ]
    },
    settings: {
      react: {version: '18'}
    }
  },
  {
    ignores: [
      '**/*.{js,mjs,cjs}',
      '.DS_Store',
      '.eslintcache',
      '.pnpm',
      '.vscode',
      'dist',
      'node_modules',
      'pnpm-lock.yaml',
      'orval.config.ts',
      'app/modules/API/Proxy/**/*',
      'app/modules/API/Graphql/@gen/**/*'
    ]
  }
);
