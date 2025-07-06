import { useContext } from "react";
import { Mycontext } from "../context";

const UserItem = () => {
	const context = useContext(Mycontext);
	console.log(context);
	return (
		<>
			{context.activeState
				? context.users.map((user) => (
						<div key={user.id}>
							<div>Name:{user.name}</div>
						</div>
				  ))
				: null}
			<button onClick={context.setActive}>Toggle</button>
			<hr />
			<button onClick={() => context.addUser("Ron")}>Add user !</button>
			<hr />
			<button
				onClick={() =>
					context.setUsers((prevState) => [
						...prevState,
						{ id: 4, name: "Caroline" },
					])
				}
			>
				Add user directly !
			</button>
		</>
	);
};

export default UserItem;
