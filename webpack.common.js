const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
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
    }
}