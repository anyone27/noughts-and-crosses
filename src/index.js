import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square ({ value, onClick }) {
  return(
    <button className='square' onClick={onClick}>{value}</button>
  );
}

function Restart({onClick}) {

  return (
    <button className="restart" onClick={onClick}>Restart</button>
  )
}

function Game() {

  const [squares, setSquares ] = useState(Array(9).fill(null));
  const [symbol, setSymbol ] = useState('X')
  const winner = calculateWinner(squares);

  function renderSquare(i) {
    return <Square
      value={squares[i]}
      onClick={() => {
        if (squares[i] === null && !winner) {
          const nextSquares = squares.slice();
          nextSquares[i] = symbol;
          setSquares(nextSquares);
          setSymbol((symbol === 'X') ? 'O' : 'X');
        };
    }}
    />;
  }

  function renderRestartButton() {
    return (
      <Restart
      onClick={() => {
        setSquares(Array(9).fill(null));
        setSymbol('X');
      }}
      />
    );
  }

  function getStatus() {
    if (winner) {
      return 'Winner:' + winner;
    } else if (isBoardFull(squares)) {
      return 'Draw!';
    } else {
      return 'Next player: ' + symbol;
    }
  }

  function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // go over all possibly winning lines and check if they consist of only X's/only O's
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
           {renderSquare(0)}
           {renderSquare(1)}
           {renderSquare(2)}
          </div>
          <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          </div>
          <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
          </div>
        </div>
        <div className="game-info">{getStatus()}</div>
        <div className="restart-button">{renderRestartButton()}</div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);