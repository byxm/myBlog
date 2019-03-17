const path = require('path');
const webpack = require('webpack');
const packages = require('../package.json');
let dependencies = Object.keys(packages.dependencies) || [];

const srcPath = path.resolve(__dirname,'../static');

module.exports = {
    mode:'production',
    entry:{
        vendorLib:dependencies
    },
    output:{
        path:srcPath,
        filename:'[name].dll.js',
        library:'[name]_library'
    },
    plugins:[
        new webpack.DllPlugin({
            path:path.join(srcPath,'[name]-mainfest.json'),
            name:'[name]_library'
        })
    ]
}