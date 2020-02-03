const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const postcssNormalize = require("postcss-normalize");
const CompressionPlugin = require("compression-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === "development"
module.exports = {
    mode: NODE_ENV,
    entry: {
        "single-spa.config": "./single-spa.config.js",
    },
    output: {
        publicPath: "/", // 根路径 在浏览器访问的时候 以什么路径访问
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|vue)$/,
                loader: "eslint-loader",
                enforce: "pre",
                include: path.join(__dirname, "src"),
                exclude: /node_modules/
            },
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
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]_[local]_[hash:base64:5]" // 自定义类名
                            },
                            importLoaders: 2,
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            modules: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        // options: { // 如果没有options这个选项将会报错 No PostCSS Config found
                        //     plugins: (loader) => [
                        //         require("postcss-flexbugs-fixes"),
                        //         require("postcss-preset-env")({
                        //             autoprefixer: {
                        //                 flexbox: "no-2009",
                        //             },
                        //             stage: 3,
                        //         }),
                        //         postcssNormalize(),
                        //     ],
                        //     sourceMap: !IS_DEV
                        // }
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [path.resolve(__dirname, "node_modules")],
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.gz$/,
                enforce: "pre",
                use: "gzip-loader"
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
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1024,
                            name: "[name].[hash:7].[ext]",
                            outputPath: "image",
                            publicPath: "/image"
                        },
                    }
                ]
            },
        ],
    },
    node: {
        fs: "empty"
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        },
        extensions: [".js", ".jsx", ".vue", ".json"],
        modules: [path.resolve(__dirname, "node_modules")],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            // chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: "檃",
            template: "./index.html"
        })
    ],
    optimization: { // 这里放优化的内容
        minimizer: [ // 表示放优化的插件
            new TerserPlugin({
                parallel: true, //开启多进程并行压缩
                cache: true // 开启缓存
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g, // 指定要压缩的模块的正则
                cssProcessor: require("cssnano")
            })
        ]
    },
    devtool: "source-map",
    externals: [],
    devServer: {
        host: "dev.yqjiajiao.com",
        port: 80,
        historyApiFallback: true
    }
};
