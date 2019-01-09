const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
      mode: modoDev ? 'development' : 'production',
      entry: './src/principal.js',
      output: {
            filename: 'index.js',
            path: __dirname + '/public'
      },
      optimization: {
            minimizer: [
                  new UglifyJSPlugin({
                        cache: true,
                        parallel: true
                  }),
                  new OptimizeCssAssetPlugin({

                  })
            ]
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
            }, {
                  test: /\.(png|jpg|svg|gif)$/,
                  use: ['file-loader']
            }]
      }
} 