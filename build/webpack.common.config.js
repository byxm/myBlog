const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const SafeParser = require("postcss-safe-parser");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const manifest = require('../static/vendor-mainfest.json');
const bundleConfig = require("../bundle-config.json")

// const evn = process.argv.pop();//获取当前环境，生产或开发
const isDev = process.env.NODE_ENV !== 'production';
// const EVN = {
//     pro:'production',
//     dev:'development'
// }

// const isDev = evn === EVN.dev;
const resolvePath = (pathLine) => path.resolve(__dirname,pathLine)


module.exports = {
    entry:[       
        "@babel/polyfill",
        path.resolve(__dirname,'../src/routes/index.js'),
        path.resolve(__dirname,'../public/index.html')
    ],
    output:{
        path:path.resolve(__dirname,'../dist'),
        chunkFilename:isDev  ? '[name].js' : '[name].[contenthash].chunk.js',//contenthash用来解决上线代码缓存问题
        filename:isDev  ? '[name].js' : '[name].[contenthash].js',
        publicPath:isDev?"/":"./",
    },
    resolve:{
        extensions:['.js','.jsx','.css','.json'],
        alias:{
            components:resolvePath('../src/components'),
            containers:resolvePath('../src/containers'),
            assets:resolvePath('../src/assets'),
            generalComponents:resolvePath('../src/generalComponents'),
            httpAjax:resolvePath('../src/httpAjax'),
            utils:resolvePath("../src/utils")
        }
    },
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                exclude:/node_modules/,
                include:path.resolve(__dirname,'../src'),
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            cacheDirectory:isDev ,
                            sourceMap:isDev
                        },
                    },
                    {
                        loader:'eslint-loader',
                    }
                ]
            },
            {
                test:/\.html$/,
                exclude:/node_modules/,
                include:path.resolve(__dirname,'../public'),
                use:{
                    loader:'html-loader',
                    options:{
                        minimize:isDev ,
                        sourceMap:isDev 
                    }
                }
            },
            {
                test:/\.(css|scss|sass)$/,
                exclude:/node_modules/,
                include:path.resolve(__dirname,'../src'),
                use:[
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,//开发环境用style-loader热加载，生产环境单独抽离CSS文件
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap:isDev , 
                            modules:true,
                            importLoaders:20,
                            localIdentName: isDev  ? "[name]__[local]--[hash:base64:5]" : ""
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap:isDev 
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:isDev
                        }
                    }
                ]
            },
            {
                test:/\.(jpg|png|gif|bmp|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:2048,
                            name:'[name]_[hash].[ext]',
                            outputPath:'images/'
                        }
                    },
                    'image-webpack-loader' //压缩图片，暂不启用参数指定大小使用默认压缩算法
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                loader:'url-loader',
                options:{
                    name:'[path][name].[ext]?[hash]',
                    limit:10240
                }
            }
        ]
    },
    optimization: {//webpack的配置优化项参数设置
    minimize: !isDev,//是否压缩
    minimizer: [
     // 优化css
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          parser: SafeParser
        }
      }),
 
      new TerserPlugin({
        test:/\.jsx?/,
        include:path.resolve(__dirname,'../src'),
        exclude:/node_modules/,
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warning: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comment: false,
            ascii_only: true
          },
          cache: true,
          sourceMap: isDev
        }
      })
    ],
        namedModules: true,
        namedChunks: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        moduleIds: "hashed",
        splitChunks: {
            chunks: "all",
            name: true,
            cacheGroups: {
                vendors: {
                    test:/[\\/]node_modules[\\/]/,
                    name: "vendors"
                }
            }
        },
        runtimeChunk: {
            name:'runtime' //把业务代码和公共依赖代码里面的mainifest依赖关系单独进行抽离开来
        },
        usedExports:true
  },
  performance:false,
  plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)//设置生产环境的环境变量NODE_ENV
        }),
        new MiniCssExtractPlugin({//提取公共CSS，其余页面CSS分模块打包
            filename:isDev ? "[name].[hash].css" : "[name].css",
            chunkFilename:isDev ? "[id].[hash].css" : "[id].css" 
        }),
        new webpack.SourceMapDevToolPlugin({
            filename:'[name].js.map',
            exclude:['vendor.js']
        }),
        new webpack.DllReferencePlugin({//关联dll生成的vendor-manifest.json 
            context:path.join(__dirname,'static'),
            manifest:require('../static/vendor-mainfest.json')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject:true,
            template: path.resolve(__dirname,'../public/index.html'),
            favicon:path.resolve(__dirname,'../public/ziyin.ico'),
            vendorJsName: bundleConfig.vendor.js,
          })
        
    ]
}