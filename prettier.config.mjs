// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const configuration = {
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],

  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  endOfLine: 'lf',
  singleQuote: true,
  insertPragma: false,
  trailingComma: 'none',
  bracketSpacing: false,
  arrowParens: 'always',
  jsxSingleQuote: false,
  bracketSameLine: false,

  tailwindStylesheet: './app/app.css',
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx', 'cn', 'cva'],

  importOrderTypeScriptVersion: '5.1.3',
  importOrderParserPlugins: ['jsx', 'typescript', 'decorators-legacy'],
  importOrder: [
    '<TYPES>',
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/.*(?<!css)$',
    '',
    'css$',
    'scss$',
    '',
    '^[./]'
  ]
};

export default configuration;
