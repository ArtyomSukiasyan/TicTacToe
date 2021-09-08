import React, { useState } from "react";
import { loadState, saveState } from "../../Helpers/localStorage";

export default function TicTacToe() {
  const [squares, setSquares] = useState(
    loadState("game") ? loadState("game") : Array(9).fill(null)
  );
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(
    loadState("winner") ? loadState("winner") : ""
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [localStorageMessage, setLocalStorageMessage] = useState("");

  const winnerLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
}