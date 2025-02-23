module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'no-extra-semi': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        FunctionDeclaration: { parameters: 1 },
        FunctionExpression: { parameters: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
