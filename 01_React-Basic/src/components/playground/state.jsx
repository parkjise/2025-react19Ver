import React from "react";
import { useState } from "react";

const StatePlayground = () => {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);
	const addOne = () => {
		setCount(count + 1);
	};
	// const subtOne = () => {
	// 	setCount((prevCount) => prevCount - 1);
	// };
	const subtOne = () => {
		setCount((prevCount) => {
			return prevCount - 1;
		});
	};

	const reset = () => {
		setCount(initialCount);
	};
	return (
		<div>
			Count : {count}
			<button onClick={addOne}>Add + 1</button>
			<button onClick={subtOne}>Add - 1</button>
			<button onClick={reset}>RESET</button>
		</div>
	);
};

export default StatePlayground;
