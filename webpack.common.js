const path = require("path");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        gamechip: "./src/game-chip-module/game-chip.js",
        knights: "./src/knights-module/knights-game.js",
        tictactoe: "./src/tic-tac-toe-module/ttt-game.js",
        rockpaperscissors: "./src/rock-paper-scissors-module/rps-game.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "GameChip",
            favicon: "./src/logo/favicon.ico",
            filename: './index.html',
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
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
                }
            },
        ],
    },
}