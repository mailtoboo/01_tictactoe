import React, { useState } from 'react';
import { calculateWinner } from '../CalculateWinner';
import Board from './Board';

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(history[stepNumber]);
	const xO = xIsNext ? 'X' : 'O';

	const handleClick = (i) => {
		const historyPoint = history.slice(0, stepNumber + 1);
		const current = historyPoint[stepNumber];
		const squares = [...current];
		// declare winner or return if occupied
		if (winner || squares[i]) return;

		squares[i] = xO;
		setHistory([...historyPoint, squares]);
		setStepNumber(historyPoint.length);
		setXisNext(!xIsNext);
	};

	const jumpTo = (step) => {
		setStepNumber(step);
		setXisNext(step % 2 === 0);
	};

	const renderMoves = () => {
		return history.map((_step, move) => {
			const destination = move ? `Go to move #${move}` : 'Go to Start';
			return (
				<li key={move}>
					<button onClick={() => jumpTo(move)}>{destination}</button>
				</li>
			);
		});
	};

	const clearGame = () => {
		setHistory([Array(9).fill(null)]);
		setStepNumber(0);
		setXisNext(true);
	};

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Tic Tac Toe</h1>
			<div className="grid-container">
				<div className="info-wrapper grid-item">
					<h3>History</h3>
					{renderMoves()}
				</div>
				<div className="grid-item">
					<Board
						squares={history[stepNumber]}
						onClick={handleClick}
					/>
				</div>
				<div className="grid-item">
					<h3>
						{winner
							? 'Winner: ' + winner
							: history.length > 9
							? 'Game - Draw'
							: 'Next Player: ' + xO}
					</h3>
					<button className="clear-btn" onClick={clearGame}>
						Clear
					</button>
				</div>
			</div>
			<footer style={{ textAlign: 'center' }}>All Rights Reserved</footer>
		</>
	);
};

export default Game;
