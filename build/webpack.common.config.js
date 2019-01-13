const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const SafeParser = require("postcss-safe-parser");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

// const evn = process.argv.pop();//获取当前环境，生产或开发
const isDev = process.env.NODE_ENV !== 'production';
// const EVN = {
//     pro:'production',
//     dev:'development'
// }

// const isDev = evn === EVN.dev;

module.exports = {
    entry:[       
        path.resolve(__dirname,'../src/routes/index.js'),
        "@babel/polyfill",
        path.resolve(__dirname,'../public/index.html')
    ],
    output:{
        path:path.resolve(__dirname,'../dist'),
        chunkFilename:isDev  ? '[name].[hash].js' : '[name].js',
        filename:isDev  ? '[name].[hash].js' : '[name].js',
        publicPath:"./"
    },
    resolve:{
        extensions:['.js','.jsx','.css','.json'],
        alias:{
            components:path.resolve(__dirname,'../src/components'),
            containers:path.resolve(__dirname,'../src/containers'),
            assets:path.resolve(__dirname,'../src/assets'),
            generalComponents:path.resolve(__dirname,'../src/generalComponents')
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
                            localIdentName: isDev  ? "[path][name]__[local]--[hash:base64:5]" : ""
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
                loader:'file-loader'
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                loader:'file-loader'
            }
        ]
    },
    optimization: {//webpack的配置优化项参数设置
    minimize: !isDev,//是否压缩
    minimizer: [
     // 优化css
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          parser: SafeParser,
          map: {inline: false, annotation: true},
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
        chunks: "async",
        name: true,
        cacheGroups: {
        vendor: {
            test:/[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks:"all"
        }
        }
        },
        runtimeChunk: true
  },

    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)//设置生产环境的环境变量NODE_ENV
        }),
        new HtmlWebpackPlugin({
            title:"my blog",
            template:path.resolve(__dirname,'../public/index.html'),
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:isDev ? "[name].[hash].css" : "[name].css",
            chunkFilename:isDev ? "[id].[hash].css" : "[id].css" 
        }),
        new webpack.SourceMapDevToolPlugin({
            filename:'[name].js.map',
            exclude:['vendor.js']
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