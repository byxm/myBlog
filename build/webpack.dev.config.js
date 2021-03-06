const path = require('path');
const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common,{
    // devtool:'cheap-module-eval-source-map',//将错误代码映射到行，开发模式下推荐使用
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
        host:"0.0.0.0",
        port:8000,
        contentBase:[path.resolve(__dirname,'../public'),path.resolve(__dirname,'../dist')],
        compress:true,
        hot:true,
        hotOnly:true,
        open:false,
        openPage:"",
        publicPath:"/",
        progress:true,
        clientLogLevel:"none",//组织热加载模块控制台信息输出显示
        overlay:true,        //显示报错信息在浏览器端
        historyApiFallback: true,        //调用浏览器HTML5api，解析不了的需要定向到public下的index.html
        // noInfo:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'eslint-loader',
                options:{
                    fix:true
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        
    ]
})