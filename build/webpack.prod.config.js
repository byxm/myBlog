const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfigProd = {
          devtool:'none',
          mode:'production',
          plugins:[
              new CleanWebpackPlugin(['dist'],{
                  root:path.resolve(__dirname,'../')
              })
          ]
}


module.exports = merge(common,webpackConfigProd)