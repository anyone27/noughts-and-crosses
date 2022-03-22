import RenderRestartButton from './RenderRestartButton';

const GetStatus = ({ winner, symbol, setSymbol, squares, setSquares }) => {
	function isBoardFull(squares) {
		for (let i = 0; i < squares.length; i++) {
			if (squares[i] == null) {
				return false;
			}
		}
		return true;
	}

	if (winner) {
		return (
			<div className="modal">
				<div className="modal-content">
					<p className="modal-text">Winner: {winner}</p>
					<RenderRestartButton setSquares={setSquares} setSymbol={setSymbol} />
				</div>
			</div>
		);
	} else if (isBoardFull(squares)) {
		return (
			<div className="modal">
				<div className="modal-content">
					<p className="modal-text">Draw!</p>
					<RenderRestartButton setSquares={setSquares} setSymbol={setSymbol} />
				</div>
			</div>
		);
	} else {
		return 'Next player: ' + symbol;
	}
};

export default GetStatus;
