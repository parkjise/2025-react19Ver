import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = (props) => {
	const [stage, setStage] = useState(1);
	const [players, setPlayer] = useState([]);
	const [result, setResult] = useState("");

	const addPlayerhandler = (name) => {
		setPlayer((prevState) => [...prevState, name]);
	};
	return (
		<>
			<MyContext.Provider
				value={{
					stage: stage,
					players: players,
					result: result,
					addPlayer: addPlayerhandler,
				}}
			>
				{props.children}
			</MyContext.Provider>
		</>
	);
};

export { MyContext, MyProvider };
