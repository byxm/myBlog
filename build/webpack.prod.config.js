const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfigProd = {
            devtool:'none',
            mode:'production',
            plugins:[
                new CleanWebpackPlugin(['dist'],{
                    root:path.resolve(__dirname,'../')
                }),
                new UglifyjsPlugin({
                    test:  /\.js($|\?)/i,
                    exclude: /node_modules/,
                    cache: true,
                    uglifyOptions: {
                        ie8: true
                    }
                })
            ]
}


module.exports = merge(common,webpackConfigProd)