import {useState} from 'react';
import "./Game.css"


const Square = ({value, onClick}) => {
  console.log("SQuare = ", value)
  return (
  <button className='square' onClick={onClick}>
    {value}
  </button>)
}

const Board = ({squares, onClick}) => (
  <div className='board'> 
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
)

const calculateWinner = (squares) => {
  const matches = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4, 8],
    [2, 4, 7],
  ];


  const temp = [...squares];

  for (let i = 0; i < matches.length; i++) {
    const [a, b, c] = matches[i];
    if (temp[a] && temp[a] === temp[b] && temp[a] === temp[c]) {
      return temp[a];
    }
  }
  return null;
}

const Game = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(false);
  const winner = calculateWinner(squares);

  const onClickHandler = (i) => {
    if (winner || squares[i]) return;

    const temp = [...squares];

    temp[i] = xIsNext ? 'X' : 'O';
    setSquares(temp);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <Board squares = {squares} onClick={onClickHandler} />
      <h4>{winner ? ("Winner : " + winner): ('Next Player ' + (xIsNext ? 'X' : 'O'))}</h4>
    </div>
  )
}

export default Game;