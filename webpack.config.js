const path = require("path");
const Compression = require("compression-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: "./src/js/app.js",
    output: {  path: path.join(__dirname, "./dist/"), filename : 'out.js' },
    watch: true,
    devtool: "cheap-module-eval-source-map",
    module: {
        rules : [
            {
            test: /\.jsx$/,  exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['env', {
                    targets: {
                        browsers: [
                            '> 1%',
                            'last 2 versions'
                        ]
                    }
                }, 'stage-2', 'react'
                ]}
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                new require('autoprefixer')()
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'fonts',
                        outputPath: 'fonts'
                    }
                }
            }
        ]
    },
    plugins : [
        new Compression({
            threshold: 0,
            minRatio: 0.5
        })
    ]
};