import React, { useState } from "react";
import "./App.css";

function App() {
	const COLORS = [
		{ name: "C", value: "red" },
		{ name: "D", value: "orange" },
		{ name: "E", value: "yellow" },
		{ name: "F", value: "chartreuse" },
		{ name: "G", value: "aqua" },
		{ name: "A", value: "mediumPurple" },
		{ name: "B", value: "navajoWhite" },
	];

	const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);
	const [grid, setGrid] = useState(
		[...Array(9)].map((color, index) => ({ color: "red", id: index }))
	);

	function handleBoxClick(index) {
		setSelectedBoxIndex(index);
	}

	function handleColorChange(color) {
		const newGrid = [...grid];
		newGrid[selectedBoxIndex].color = color;
		setGrid(newGrid);
	}

	return (
		<div className="App">
			<h1 className="'title'">MUSIC BOX</h1>
			<div className="grid-container">
				{grid.map((box, index) => {
					if (index === 4) {
						return <div key={index} className="empty" />;
					}
					return (
						<div
							key={box.id}
							className={`color-box ${
								selectedBoxIndex === index ? "selected" : ""
							}`}
							style={{ backgroundColor: box.color }}
							onClick={() => handleBoxClick(index)}
						>
							{box.color ? COLORS.find((c) => c.value === box.color).name : ""}
						</div>
					);
				})}
			</div>
			<div className="color-selector">
				<select
					value={selectedBoxIndex !== null ? grid[selectedBoxIndex].color : ""}
					onChange={(event) => handleColorChange(event.target.value)}
				>
					<option value="" disabled hidden>
						選擇音調
					</option>
					{COLORS.map((color) => (
						<option key={color.value} value={color.value}>
							{color.name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default App;
