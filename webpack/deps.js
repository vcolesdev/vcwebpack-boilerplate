const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const dotenv = require('dotenv')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')

module.exports = {
    HtmlWebpackPlugin,
    MiniCssExtractPlugin,
    CssMinimizerPlugin,
    CleanWebpackPlugin,
    CopyPlugin,
    dotenv,
    merge,
    TerserPlugin,
    Serve
}