const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundledStopwatch.js',
    },
    devServer: {
        port: 8080,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(SRC_PATH, 'index.html')
        }),
        new CopyPlugin([
            { from: path.resolve(ROOT_PATH, 'public'), to: 'public' }
        ])
    ],
};