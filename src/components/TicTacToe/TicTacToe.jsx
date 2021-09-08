import React, { useState } from "react";

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
}