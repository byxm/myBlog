const path = require('path');
const common = require('./webpack.common.config');
const merge = require('webpack-merge');
const webpack = require('webpack');


module.exports = merge(common,{
    devServer:{
        port:8080,
        contentBase:[path.resolve(__dirname,'../public'),path.resolve(__dirname,'../dist')],
        compress:true,
        hot:true,
        inline:true,
        open:true,
        openPage:"",
        publicPath:"/"
    },
    devtool:'inline-source-map',
    mode:'development',
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})