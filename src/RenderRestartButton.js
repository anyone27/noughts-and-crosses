import Restart from './Restart';

const RenderRestartButton = ({ setSquares, setSymbol }) => {
	return (
		<div className="restart-button">
			<Restart
				onClick={() => {
					setSquares(Array(9).fill(null));
					setSymbol('X');
				}}
			/>
		</div>
	);
};

export default RenderRestartButton;
