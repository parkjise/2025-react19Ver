import { useRef } from "react";
import { useState } from "react";
import { Transition } from "react-transition-group";

const TransitionComp = () => {
	const nodeRef = useRef(null);
	const [show, setShow] = useState(true);

	const showDiv = () => {
		// setShow((prev) => !prev);
		setShow(!show ? true : false);
	};
	return (
		<>
			<Transition
				nodeRef={nodeRef}
				in={show}
				timeout={1000}
				onEnter={() => {
					console.log("Enter");
				}}
				onExit={() => {
					console.log("Exit");
				}}
			>
				{(state) => (
					<div
						className={`square square-${state}`}
					>{`square square-${state}`}</div>
				)}
			</Transition>
			{/* {show ? (
				<div style={{ background: "red", height: "100px" }}>Transition</div>
			) : null} */}
			<button className="btn btn-primary" onClick={showDiv}>
				Show
			</button>
		</>
	);
};

export default TransitionComp;
