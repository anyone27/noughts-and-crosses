import React, { useState } from 'react';

const Scores = ({ resetScores, scores }) => {
	const [players, setPlayers] = useState(['X', 'O']);
	const [changeNames, setChangeNames] = useState(false);

	const getUserNames = () => {
		setChangeNames(true);
	};

	const handleUserChange = (event) => {
		event.preventDefault();
		const player1 = event.target[0].value;
		const player2 = event.target[1].value;
		if (player1.length >= 10) {
			alert(' Player 1, Please choose a nickname shorter than 10 characters');
		} else if (player2.length >= 10) {
			alert(' Player 2, Please choose a nickname shorter than 10 characters');
		} else {
			setPlayers([`X: ${player1}`, `O: ${player2}`]);
		}
		setChangeNames(false);
	};

	if (changeNames) {
		return (
			<div className="modal">
				<div className="modal-content">
					<form onSubmit={handleUserChange} className="changename">
						<span className="player1">
							<label htmlFor="player1">Player 1 </label>
							<input name="player1" type="text" />
						</span>
						<span className="player2">
							<label htmlFor="player2">Player 2 </label>
							<input name="player2" type="text" />
						</span>
						<button className="changename-button" type="submit" value="Submit">
							Submit
						</button>
					</form>
				</div>
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
