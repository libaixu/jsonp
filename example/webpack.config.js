'use strict';

const path = require('path');

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../demo/test.js'),
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'jsonp.js',
  }
}

module.exports = config;
