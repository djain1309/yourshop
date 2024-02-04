import React, { useState } from "react";
import classes from "./TTT.module.css";

const Square = ({ value, onClickHandler }) => {
  return <button className={classes.cell} onClick={onClickHandler}>{value}</button>;
};

const Board = ({ squares, onClickHandler }) => {

  return (
    <div className={classes.square}>
      {squares.map((square, i) => (
        <Square value={square} onClickHandler={() => onClickHandler(i)} key={i} />
      ))}
    </div>
  );
};

const findWinner = (squares) => {

    const matches = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ];
    let temp = [...squares];

    for (let i = 0; i < matches.length; i++) {
        let [a, b, c] = matches[i];
        if (temp[a] && temp[a] === temp[b] && temp[a] === temp[c]) {
            return temp[a];
        }
    }
    return null;
}

const Tick = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(false);

  const winner = findWinner(squares);

  const onClickHandler = (i) => {
    if (winner || squares[i]) return;
    const temp = [...squares];
    temp[i] = xIsNext ? 'X' : 'O';
    setSquares(temp);
    setXIsNext(!xIsNext); 
  };

  return (
    <div className={classes.board}>
      <h2>Click</h2>
      <Board squares={squares} onClickHandler={onClickHandler} />

        {winner ? (`Winner : ${winner} `) : `Next Player : ${xIsNext ? 'X' : 'O'}` }

    </div>
  );
};

export default Tick;
