const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'FUI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
}
