const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
      mode: 'development',
      entry: './src/principal.js',
      output: {
            filename: 'index.js',
            path: __dirname + '/public'
      },
      plugins: [
            new MiniCssExtractPlugin({
                  filename: 'estilo.css'
            })
      ],
      module: {
            rules: [{
                  test: /\.s?[ac]ss$/, //regex - verifica .sass ou .css
                  use: [
                        MiniCssExtractPlugin.loader, //Externaliza arquivo css
                        //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                        'css-loader', //interpreta @import, url()...
                        'sass-loader'
                  ]
            }]
      }
} 