const path = require('path');
const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = merge(common,{
     output:{
        path:path.resolve(__dirname,'../dist'),
        chunkFilename:isDev  ? '[name].[hash].js' : '[name].js',
        filename:isDev  ? '[name].[hash].js' : '[name].js',
        publicPath:"/",
    },
    devtool:'cheap-module-eval-source-map',//将错误代码映射到行，开发模式下推荐使用
    devServer:{
        host:'localhost',
        port:8000,
        contentBase:[path.resolve(__dirname,'../public'),path.resolve(__dirname,'../dist')],
        compress:true,
        hot:true,
        inline:true,
        open:true,
        openPage:"",
        publicPath:"/",
        progress:true,
        clientLogLevel:"none",//组织热加载模块控制台信息输出显示
        overlay:true,        //显示报错信息在浏览器端
        historyApiFallback: true,        //调用浏览器HTML5api，解析不了的需要定向到public下的index.html
        // noInfo:true
    },
    mode:'development',
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})