import { useSelector,useDispatch } from "react-redux";
import {addMovie} from "./store/movies";
import { setType,fetchUsers } from "./store/users";

const App = () => {
	const movies = useSelector((state) => state.movies.list);
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();
	return (
		<>
			<h2>Movies</h2>
			<ul>
				{movies
					? movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
					: null}
			</ul>
			<hr />
			<button onClick={() => dispatch(addMovie({id:3,title:'Batman'}))}>Add Movie</button>
			<hr />
			<h3>User Type : {users.type}</h3>
			<button onClick={() => dispatch(setType('Admin'))}>Set Type</button>
			<hr />
			<button onClick={() => dispatch(fetchUsers())}>Get Users</button>
		</>
	);
};

export default App;
