import Board from "./board-module/board.js";
import "./css/normalise.css";
import "./css/style.css";
import "./css/header.css";
import { getHeader, getFooter } from "./layout-builder.js";
import Controller from "./puzzle-module/controller.js";

// Chessboard Initial Parameters
const boardSize = 8;
const initialCoordinate = 3;

// Create Chessboard
const controller = new Controller(initialCoordinate, boardSize);
const board = new Board(
    initialCoordinate,
    boardSize,
    controller.updateCallback.bind(controller),
    controller.alertCallback.bind(controller), 
    controller.easeCallback.bind(controller),
    controller.clearCallback.bind(controller)
);

controller.setRandomLocationCallback(
    board.randomLocationCallback.bind(board),
    board.randomStartCallback.bind(board)
);

// Add Elements to Body
document.body.appendChild(getHeader(board.resetCallback.bind(board)));
document.body.appendChild(board.module);
document.body.appendChild(controller.module);
document.body.appendChild(getFooter());