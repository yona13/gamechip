const path = require("path");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        static: "./dist",
    },
    devtool: "inline-source-map",
    entry: {
        index: "./src/index.js",
        gamechip: "./src/game-chip-module/game-chip.js",
        knights: "./src/knights-module/knights-game.js",
        queue: "./src/data-structures/queue.js",
        graph: "./src/data-structures/graph.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.json5$/i,
                type: "json",
                parser: {
                    parse: json5.parse,
                },
            },
        ],
    },
    optimization: {
        runtimeChunk: "single",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "GameChip",
        }),
    ],
};