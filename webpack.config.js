const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
        key: path.resolve(__dirname, './src/utilities/key.js'),
        render: path.resolve(__dirname, './src/utilities/render.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].build.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    mode: "development"
}