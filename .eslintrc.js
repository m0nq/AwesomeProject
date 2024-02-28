module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        semi: true,
        bracketSameLine: true,
        arrowParens: 'avoid',
        singleAttributePerLine: false
      }
    ],
    'import/no-duplicates': 'off'
  }
};
