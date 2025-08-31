import { useRef } from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const CssTr = () => {
	const [show, setShow] = useState(false);
	const nodeRef = useRef(null);
	const showDiv = () => setShow(!show ? true : false);

	return (
		<>
			<CSSTransition
				nodeRef={nodeRef}
				in={show}
				timeout={500}
				classNames="cssSq"
			>
				<div ref={nodeRef} className="cssSq">
					Hello
				</div>
			</CSSTransition>
			<button className="btn btn-primary" onClick={showDiv}>
				Show
			</button>
		</>
	);
};

export default CssTr;
