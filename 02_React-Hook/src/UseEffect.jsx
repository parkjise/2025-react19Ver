import React, { useEffect, useState } from "react";
import BlocksComponents from "./Blocks";
const UseEffectComponent = () => {
	const [count, setCount] = useState(0);
	const [animal, setAnimal] = useState("dog");
	const [block, setBlock] = useState(false);

	const addOne = () => {
		setCount(count + 1);
	};

	const subtOne = () => {
		setCount(count - 1);
	};

	const reset = () => {
		setCount(0);
	};

	const doSomething = () => {
		console.log("do Something");
	};

	useEffect(() => {
		console.log("Run once");
	}, []);

	useEffect(() => {
		if (count === 3) {
			alert("ding dong");
		}
		doSomething();
	});

	useEffect(() => {
		console.log(count);
		return () => {
			console.log("Use Effect Count");
		};
	}, [count]);

	useEffect(() => {
		console.log(animal);
	}, [animal]);

	// Blocks

	return (
		<>
			<h3>Count : {count}</h3>
			<button onClick={addOne}>+1</button>
			<button onClick={subtOne}>-1</button>
			<button onClick={reset}>Set to Zero</button>
			<hr />
			<h3>{animal}</h3>
			<button onClick={() => setAnimal("Cat")}>Change Animal</button>
			{block ? <BlocksComponents /> : null}
			<button onClick={() => setBlock(!block)}>Block</button>
		</>
	);
};

export default UseEffectComponent;
