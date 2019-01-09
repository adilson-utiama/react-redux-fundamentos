const webpack = require('webpack')

module.exports = {
      mode: 'development',
      entry: './src/principal.js',
      output: {
            filename: 'index.js',
            path: __dirname + '/public'
      }
} 