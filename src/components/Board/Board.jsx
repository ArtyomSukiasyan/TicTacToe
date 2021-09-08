import styles from "./Board.module.css";

export default function Board({ squares, handleClick }) {
  return (
    <div className={styles.game}>
      {squares.map((el, id) => {
        return (
          <div className={styles.square} onClick={handleClick} data={id}>
            {el}
          </div>
        );
      })}
    </div>
  );
}