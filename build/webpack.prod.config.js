const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const webpackConfigProd = {
            output:{
                path:path.resolve(__dirname,'../dist'),
                chunkFilename:isDev  ? '[name].[hash].js' : '[name].js',
                filename:isDev  ? '[name].[hash].js' : '[name].js',
                publicPath:"./",
            },
            devtool:'none',
            mode:'production',
            plugins:[
                new CleanWebpackPlugin(['dist'],{
                    root:path.resolve(__dirname,'../')
                }),
                new UglifyjsPlugin({
                    test: /\.jsx?/,
                    include: path.resolve(__dirname,'../src'),
                    exclude: /node_modules/,
                    cache: true,
                    sourceMap: true,
                    uglifyOptions: {
                        ie8: true
                    }
                })
            ]
}


module.exports = merge(common,webpackConfigProd)