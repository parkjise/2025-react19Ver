import React, { useRef, useContext } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { MyContext } from "../context";

const stage_one = () => {
	const textInput = useRef();
	const context = useContext(MyContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = textInput.current.value;
		context.addPlayer(value);
		textInput.current.value = "";
	};

	return (
		<>
			<Form onSubmit={handleSubmit} className="mt-4">
				<Form.Group>
					<Form.Control
						type="text"
						placeholder="Add Player Name"
						name="player"
						ref={textInput}
					></Form.Control>
				</Form.Group>
				{/* Errors */}
				<Button className="miami" variant="primary" type="submit">
					Add Player
				</Button>
				{context.players && context.players.length > 0 ? (
					<>
						<hr />
						<div>
							<ul>
								<li className="list-group">
									{context.players.map((player, idx) => (
										<li
											key={idx}
											className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
										>
											{player}
											<span className="badge badge-danger">X</span>
										</li>
									))}
								</li>
							</ul>
						</div>
						<div className="action_button">NEXT</div>
					</>
				) : null}
			</Form>
		</>
	);
};

export default stage_one;
