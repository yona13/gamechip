import Board from "./board-module/board.js";
import "./css/normalise.css";
import "./css/style.css";
import "./css/header.css";
import { getHeader, getFooter } from "./layout-builder.js";

// Create Chessboard
const board = new Board();

// Add Elements to Body
document.body.appendChild(getHeader(board.resetCallback.bind(board)));
document.body.appendChild(board.module);
document.body.appendChild(getFooter());