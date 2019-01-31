const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const packages = require('../package.json');
let dependencies = Object.keys(packages.dependencies) || [];

const srcPath = path.resolve(__dirname,'../static');

module.exports = {
    entry:{
        vendor:dependencies
    },
    output:{
        path:srcPath,
        filename:'[name].dll.js',
        library:'[name]_library'
    },
    plugins:[
        new webpack.DllPlugin({
            context:path.join(__dirname,'static'),
            path:path.join(srcPath,'[name]-mainfest.json'),
            name:'[name]_library'
        }),
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: './'
          })
    ]
}