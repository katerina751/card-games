const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/script.js',
    mode: isProduction ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        // And here!
        new CopyPlugin({
            patterns: [
                { from: 'assets', to: 'assets' },
                { from: 'img', to: 'img' },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },
    devtool: isProduction ? "hidden-source-map" : "source-map",
};
