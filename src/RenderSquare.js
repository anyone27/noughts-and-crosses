import Square from './Square';

const RenderSquare = ({
	i,
	squares,
	setSquares,
	winner,
	symbol,
	setSymbol,
}) => {
	return (
		<Square
			value={squares[i]}
			onClick={() => {
				if (squares[i] === null && !winner) {
					const nextSquares = squares.slice();
					nextSquares[i] = symbol;
					setSquares(nextSquares);
					setSymbol(symbol === 'X' ? 'O' : 'X');
				}
			}}
		/>
	);
};

export default RenderSquare;
