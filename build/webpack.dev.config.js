const path = require('path');
const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(common,{
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
        clientLogLevel:"none"//组织热加载模块控制台信息输出显示
    },
    mode:'development',
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})