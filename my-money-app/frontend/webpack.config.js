const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
      //Configuracoes webpack de entrada e saida
      entry: './src/index.jsx',
      output: {
            path: __dirname + '/public',
            filename: './app.js'
      },
      //Configuracao do dev-server
      devServer: {
            port: 8080,
            contentBase: './public'
      },
      resolve: {
            extensions: ['', '.js', '.jsx'],
            //Alias para caminhos de libs
            alias: {
                  modules: __dirname + '/node_modules',
                  jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
                  bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
            }
      },
      plugins: [
            new webpack.ProviderPlugin({
                  $: 'jquery',
                  jQuery: 'jquery',
                  'window.jQuery': 'jquery'
            }),
            new ExtractTextPlugin('app.css')
      ],
      module: {
            loaders: [{ //Configuracoes para usar o babel
                  test: /.js[x]$/,
                  loader: 'babel-loader',
                  exclude: /node_modules/,
                  query: {
                        presets: ['es2015', 'react'],
                        plugins: ['transform-object-rest-spread']
                  }
            }, {
                  test: /\.css$/,
                  loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                  test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
                  loader: 'file'
            }]
      }

}