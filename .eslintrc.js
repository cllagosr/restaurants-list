'use strict';

module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true
  },
  extends: [
    '@strv/javascript/environments/react/v16',
    '@strv/javascript/environments/react/accessibility',
    '@strv/javascript/coding-styles/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react'
  ],
  ignorePatterns: ["serviceWorker.js"],
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  globals: {
    document: true,
    window: true,
    process: true,
  }
};
