const Scores = ({ players, scores, resetScores, changeNames }) => {
	return (
		<div className="scores">
			<h2>
				<p>
					Player 1: {players[0]} Score: {scores[0]}{' '}
				</p>
				<p>
					Player 2: {players[1]} Score: {scores[1]}
				</p>
			</h2>
			<button onClick={resetScores}>Reset Scores</button>
			{/* <button onClick={changeNames}>Change Names</button> */}
		</div>
	);
};

export default Scores;
