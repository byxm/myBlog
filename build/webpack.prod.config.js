const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const webpackConfigProd = {
            devtool:'cheap-module-source-map',
            // devtool:'none',
            mode:'production',
            plugins:[
                new CleanWebpackPlugin(['dist'],{
                    root:path.resolve(__dirname,'../')
                }),
                new WorkboxPlugin.GenerateSW({
                    clientsClaim:true,
                    skipWaiting:true
                })
            ]
}


module.exports = merge(common,webpackConfigProd)