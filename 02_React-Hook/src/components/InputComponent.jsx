import React, { forwardRef } from "react";

const InputComponent = forwardRef((props, ref) => (
	<input type="text" ref={ref} {...props} />
));

// const InputComponent = ({ props }) => {
// 	return <input type="text" ref={ref} />;
// };
// const InputComponent = ({ props }) => {
// 	return <input type="text" ref={props.ref} />;
// };

export default InputComponent;
