const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    cssPlugin = new MiniCssExtractPlugin({ filename: "output.css" });

const HtmlWebpackPlugin = require('html-webpack-plugin'),
    htmlPlugin = new HtmlWebpackPlugin({
        inject: false,
        template: path.resolve(__dirname, './sandbox/index.html')
    });

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'output.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: { name: '[name].[ext]' }
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    plugins: [cssPlugin, htmlPlugin],
}
