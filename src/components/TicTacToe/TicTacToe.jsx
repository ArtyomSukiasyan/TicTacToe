import React, { useState } from "react";
import { loadState, saveState } from "../../Helpers/localStorage";
import Board from "../Board/Board";
import styles from "./TicTacToe.module.css"

const X = "X"
const O = "O"

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

  const isWinner = () => {
    const player = count % 2 === 0 ? X : O;

    for (let i = 0; i < winnerLine.length; i++) {
      const line = winnerLine[i];
      if (
        squares[line[0]] === player &&
        squares[line[1]] === player &&
        squares[line[2]] === player
      ) {
        setResult(`${player} win`);
        saveState("winner ", `${player} win`);
        return;
      }
    }

    if (count === 8) {
      setResult("Draw");
      try {
        saveState("winner", "Draw");
      } catch {
        setLocalStorageMessage("Impossible to save in your local storage");
      }
    }
  };

  const handleClick = (e) => {
    if (result === "") {
      const data = e.target.getAttribute("data");
      if (squares[data] === null) {
        squares[data] = count % 2 === 0 ? X : O;
        setSquares(squares);
        setCount(count + 1);
      } else {
        setErrorMessage("This square is not empty!");
        setTimeout(() => {
          setErrorMessage("");
        }, 1500);
      }
      try {
        saveState("game", squares);
      } catch {
        setLocalStorageMessage("Impossible to save in your local storage");
      }
    }
    isWinner();
  };

  return (
    <div className={styles.container} handleClick={handleClick}>
      <Board squares={squares} />

    </div>
  );
}