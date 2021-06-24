import React, { useState } from "react";
import "../../styles/Game/Game.scss";

const GameTime = () => {
	const off = {
		on: false,
		color: "#FFF",
	};
	const [cells, setCells] = useState(Array.from({ length: 50 }, () => off));
	const randomColorFunction = Math.floor(Math.random() * 16777215).toString(16);
	const [randomColor] = useState(`#${randomColorFunction}`);

	const clickedSpan = (i, defaultState) => (e) => {
		e.preventDefault();
		setCells(
			cells.map((cell, cellIndex) => {
				if (cellIndex === i) {
					if (defaultState) return defaultState;
					return {
						on: true,
						color: randomColor,
					};
				}
				return cell;
			}),
		);
	};

	return (
		<div className="Game">
			<div className="grid">
				{cells.map((cell, i) => (
					<div
						style={{ background: cell.on ? cell.color : "#FFF" }}
						key={i}
						onClick={clickedSpan(i)}
						onContextMenu={clickedSpan(i, off)}
						className="spaned"></div>
				))}
			</div>
		</div>
	);
};

export default GameTime;
