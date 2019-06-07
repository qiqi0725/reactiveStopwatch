const path = require('path');
const webpack = require('webpack');

module.exports = env => {
    return {
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
            extensions: ['*', '.js', '.jsx'],
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            publicPath: '/path/',
            filename: 'bundledStopwatch.js',
        },
        devServer: {
            contentBase: path.join(__dirname, '/public/'),
            publicPath: 'http://localhost:8000/dist',
            hot: true,
        },
        plugins: [new webpack.HotModuleReplacementPlugin()],
    };
}