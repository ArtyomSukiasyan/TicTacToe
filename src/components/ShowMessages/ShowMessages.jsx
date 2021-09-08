import styles from "./Messages.module.css";

export default function ShowMessages({
  startNewGame,
  result,
  errorMessage,
  localStorageMessage,
}) {
  return (
    <div className={styles.messages}>
      <div>
        <button className={styles.button} onClick={startNewGame}>
          New Game
        </button>
      </div>
      <div className={styles.result}>{result}</div>
      <div className={styles.error}>{errorMessage}</div>
      <div>{localStorageMessage}</div>
    </div>
  );
}
