import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CalculateWinner from './CalculateWinner';
import GetStatus from './GetStatus';
import './index.css';
import RenderRestartButton from './RenderRestartButton';
import RenderSquare from './RenderSquare';
import Scores from './Scores';

function Game() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [symbol, setSymbol] = useState('X');
	const winner = CalculateWinner(squares);
	const [scores, setScores] = useState([0, 0]);

	useEffect(() => {
		if (winner === 'X') {
			scores[0]++;
		} else if (winner === 'O') {
			scores[1]++;
		}
	}, [winner]);

	const resetScores = () => {
		setScores([0, 0]);
	};

	return (
		<>
			<div className="container">
				<div className="game">
					<Scores scores={scores} resetScores={resetScores} />
					<h1>Noughts and Crosses</h1>
					<div className="game-board">
						<div className="board-row">
							<RenderSquare
								i={0}
								squares={squares}
								setSquares={setSquares}
								winner={winner}
								symbol={symbol}
								setSymbol={setSymbol}
							/>
							<RenderSquare
								i={1}
								squares={squares}
								setSquares={setSquares}
								winner={winner}
								symbol={symbol}
								setSymbol={setSymbol}
							/>
							<RenderSquare
								i={2}
								squares={squares}
								setSquares={setSquares}
								winner={winner}
								symbol={symbol}
								setSymbol={setSymbol}
							/>
						</div>
						<div className="board-row">
							<RenderSquare
								i={3}
								squares={squares}
								setSquares={setSquares}
								winner={winner}
								symbol={symbol}
								setSymbol={setSymbol}
							/>
							<RenderSquare
								i={4}
								squares={squares}
								setSquares={setSquares}
								winner={winner}
								symbol={symbol}
								setSymbol={setSymbol}
							/>
							<RenderSquare
								i={5}
								squares={squares}
								setSquares={setSquares}
								winner={winner}
								symbol={symbol}
								setSymbol={setSymbol}
							/>
						</div>
						<div className="board-row">
							<RenderSquare
								i={6}
								squares={squares}
								setSquares={setSquares}
								winner={winner}
								symbol={symbol}
								setSymbol={setSymbol}
							/>
							<RenderSquare
								i={7}
								squares={squares}
								setSquares={setSquares}
								winner={winner}
								symbol={symbol}
								setSymbol={setSymbol}
							/>
							<RenderSquare
								i={8}
								squares={squares}
								setSquares={setSquares}
								winner={winner}
								symbol={symbol}
								setSymbol={setSymbol}
							/>
						</div>
					</div>
					<div className="game-info">
						<GetStatus
							winner={winner}
							symbol={symbol}
							setSymbol={setSymbol}
							squares={squares}
							setSquares={setSquares}
						/>
					</div>
					{!winner && (
						<RenderRestartButton
							setSquares={setSquares}
							setSymbol={setSymbol}
						/>
					)}
				</div>
			</div>
		</>
	);
}

ReactDOM.render(<Game />, document.getElementById('root'));
