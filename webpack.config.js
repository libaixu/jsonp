'use strict';

const path = require('path');

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'release'),
    filename: '[name].js'
  }
}

module.exports = config;
