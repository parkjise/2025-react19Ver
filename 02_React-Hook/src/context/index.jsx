import { createContext, useState } from "react";

const Mycontext = createContext();

const MyProvider = (props) => {
	const [active, setActive] = useState(true);
	const [users, setUsers] = useState([
		{ id: 1, name: "Francis" },
		{ id: 2, name: "Steve" },
		{ id: 3, name: "Miles" },
	]);

	const addUser = (name) => {
		setUsers((prevState) => [...prevState, { id: 4, name: name }]);
	};

	return (
		<Mycontext.Provider
			value={{
				users: users,
				activeState: active,
				setUsers:setUsers,
				addUser: addUser,
				setActive: () => setActive(!active),
			}}
		>
			{props.children}
		</Mycontext.Provider>
	);
};

export { Mycontext, MyProvider };
