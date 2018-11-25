#!/usr/bin/env node

require('babel-register');
const babel = require('@babel/core');
const babelPresetLatestNode = require('babel-preset-latest-node');

babel.transform('code();', {
  presets: [[babelPresetLatestNode, {
    target: 'current',
  }]],
});

require('babel-polyfill');
const ora = require('ora');

const spinner = ora('Loading unicorns');
spinner.color = 'yellow';
spinner.text = '加载中ing。。。';
spinner.start();
setTimeout(() => {
  spinner.succeed('成功～');
}, 1000);
require('./src');
