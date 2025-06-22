import React, { useEffect } from "react";

const Blocks = () => {
	useEffect(() => {
		console.log("Blocks Create");

		return () => {
			console.log("Block Removed");
		};
	});

	return (
		<div
			style={{
				background: "red",
				color: "white",
				margin: "10px",
				padding: "10px",
			}}
		>
			I am a block
		</div>
	);
};

export default Blocks;
