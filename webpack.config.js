const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssNormalize = require('postcss-normalize');

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === "development"
module.exports = {
    mode: NODE_ENV,
    entry: {
        'single-spa.config': './single-spa.config.js',
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // antd 样式处理
            {
                test:/\.css$/,
                exclude:/src/,
                use:[
                    {
                        loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options:{
                            importLoaders:1
                        }
                    }
                ]
            },
            // 自定义样式  类名 处理
            {
                test: /\.(css|less)$/,
                exclude:/node_modules/,
                use: [
                    IS_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]_[local]_[hash:base64:5]" // 自定义类名
                            },
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modules: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('postcss-flexbugs-fixes'),
                                require('postcss-preset-env')({
                                    autoprefixer: {
                                        flexbox: 'no-2009',
                                    },
                                    stage: 3,
                                }),
                                postcssNormalize(),
                            ],
                            sourceMap: !IS_DEV
                        }
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.gz$/,
                enforce: 'pre',
                use: 'gzip-loader'
            },
            {
                test: /\.js(x)?$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[path]/[name].[hash:7].[ext]',
                        },
                    }
                ]
            },
        ],
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: "檃",
            template: "./index.html"
        })
    ],

    devtool: 'source-map',
    externals: [],
    devServer: {
        host: "dev.yqjiajiao.com",
        port: 80,
        historyApiFallback: true
    }
};
