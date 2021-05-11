const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("dotenv").config();

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
            // favicon: "./src/main/assets/imgs/fav.svg",
            gmap_url: process.env.GMAP_URL,
        }),
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "[id].css",
        }),
        new webpack.DefinePlugin({
            "process.env": {
                BASE_URL: JSON.stringify(process.env.BASE_URL),
                GOOGLE_MAP_KEY: JSON.stringify(process.env.GOOGLE_MAP_KEY),
                APP_ID: JSON.stringify(process.env.GOOGLE_MAP_KEY),
                GMAP_URL: JSON.stringify(process.env.GMAP_URL),
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/, /\.test.tsx?$/, /\.spec.tsx?$/],
                use: "ts-loader",
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs",
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader",
            },
        ],
    },
};
