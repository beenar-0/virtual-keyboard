const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
        render: path.resolve(__dirname, './src/utils/render.js'),
        key: path.resolve(__dirname, './src/utils/key.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].build.js"
    },
    devServer: {
        historyApiFallback: true,
        static: './src',
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    mode: "development"
}