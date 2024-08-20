import "./css/normalise.css";
import "./css/style.css";
import "./css/header.css";
import { getHeader, getFooter } from "./layout-builder.js";
import Chessboard from "./chess-module/chessboard.js";

// Generate Chessboard
const chessboard = new Chessboard();

// Add DOM Elements to Body
document.body.appendChild(getHeader(chessboard.resetCallback.bind(chessboard)));
document.body.appendChild(chessboard.module);
document.body.appendChild(chessboard.controller.module);
document.body.appendChild(getFooter());