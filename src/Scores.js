import React, { useState } from 'react';

const Scores = ({ resetScores, scores }) => {
	const [players, setPlayers] = useState(['X', 'O']);
	const [changeNames, setChangeNames] = useState(false);

	const getUserNames = () => {
		setChangeNames(true);
	};

	const handleUserChange = () => {
		setPlayers('X: ' + player1.value, 'O: ' + player2.value);
		setChangeNames(false);
	};

	if (changeNames) {
		return (
			<div className="modal">
				<form onSubmit={handleUserChange}>
					<input id="player1" type="text" default="X" />
					<input id="player2" type="text" default="O" />
					<button type="submit" value="Submit">
						Submit
					</button>
				</form>
			</div>
		);
	} else {
		return (
			<div className="scores">
				<h2>
					<p>
						{players[0]} - Score: {scores[0]}{' '}
					</p>
					<p>
						{players[1]} - Score: {scores[1]}
					</p>
				</h2>
				<button onClick={resetScores}>Reset Scores</button>
				<button onClick={getUserNames}>Change Names</button>
			</div>
		);
	}
};

export default Scores;
