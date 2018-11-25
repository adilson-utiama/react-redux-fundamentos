const webpack = require('webpack');

module.exports = {
      /* arquivo de entrada */
      entry: './ex/index.js',
      /* local onde o bundle sera gerado e nome do aruivo final  */  
      output: {  
            path: __dirname + '/public',
            filename: './bundle.js'
      },
      /* Configuracoes de servidor de desenvolvimento */
      devServer: {
            port: 8080,
            contentBase: './public'
      },
      module: {
            loaders: [{
                  test: /.js?$/,
                  loader: 'babel-loader',
                  exclude: '/node_modules/',
                  query: {
                        presets: ['es2015'],
                        plugins: ['transform-object-rest-spread']
                  }
            }]
      }
}