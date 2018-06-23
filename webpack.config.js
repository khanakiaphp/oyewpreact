var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// console.log(__dirname)
var browserConfig = {
    mode: 'development',
    devtool: "source-map",

    entry: {
        main: [path.resolve(__dirname, './src/index.js')],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: 'bundle.js',
        // publicPath: '/'
        filename: '[name].js',
    },
    optimization: {
        runtimeChunk: true,

        minimize: false,

        splitChunks: {
            cacheGroups: {
                // commons: {
                //     chunks: "initial",
                //     minChunks: 0,
                //     maxInitialRequests: 5, // The default limit is too small to showcase the effect
                //     minSize: 0 // This is example is too small to create commons chunks
                // },
                vendor: {
                    test: path.resolve(__dirname, "./node_modules/"),
                    chunks: "initial",
                    name: "vendor",
                    priority: -10,
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/, // add this line
            use: 'babel-loader'
        }, ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ]
}




var cssConfig = {
    mode: 'development',
    target: 'node',
    entry: {
        vendors: path.resolve(__dirname, './src/assets/index.js'),
        style: path.resolve(__dirname, './src/assets/scss/index.scss'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },

    module: {

        rules: [

            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: "url-loader?limit=1000",
            },
            {
                test: /\.(woff|woff2|eot|otf|ttf|svg)$/,
                use: "file-loader",
            },

            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            //  minimize: false || {
                            //     discardComments: {
                            //         removeAll: true,
                            //     },
                            // }
                        }
                    },
                    // 'css-loader',
                    "sass-loader",
                    // "postcss-loader"
                    // { loader: "resolve-url-loader", options: { sourceMap: true } },
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                path: path.resolve(__dirname, 'postcss.config.js'),
                            },
                            sourceMap: true,
                            // plugins: [
                            //   require('cssnano')(),
                            // ]
                        }
                    },
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].css"
        }),
    ]
}

module.exports = [browserConfig, cssConfig]