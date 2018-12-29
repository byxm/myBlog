const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:[       
        path.resolve(__dirname,'./src/index.jsx'),
        "@babel/polyfill",
        path.resolve(__dirname,'./public/index.html')
    ],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.(jsx?)$/,
                exclude:/node_modules/,
                include:path.resolve(__dirname,'src'),
                use:{
                    loader:'babel-loader',
                    options:{
                        cacheDirectory:true
                    }
                }
            },
            {
                test:/\.(html?)$/,
                exclude:/node_modules/,
                include:path.resolve(__dirname,'public'),
                use:{
                    loader:'html-loader',
                    options:{
                        minimize:true
                    }
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"my blog",
            template:path.resolve(__dirname,'./public/index.html'),
            filename:'index.html'
        })
    ]
}