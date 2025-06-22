import React, { useRef } from "react";
import InputComponent from "./components/InputComponent";

const UseRefComponent = () => {
	const textInput = useRef();
	const triggerHandler = () => {
		console.log(textInput.current.value);
	};

	return (
		<>
			<h1>Form</h1>
			<InputComponent ref={textInput} />
			<button onClick={triggerHandler}>Trigger</button>
		</>
	);
};

export default UseRefComponent;
