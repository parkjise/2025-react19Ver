import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Posts from "./components/posts";
import Profile from "./components/profile";
import Home from "./components/home";
function App() {
	return (
		<BrowserRouter>
			<header>
				<Link to="/">Home</Link>
				<Link to="posts">Posts</Link>
				<Link
					to={{
						pathname: "profile",
						hash: "#francis",
						search: "?profile=true",
					}}
				>
					Profile
				</Link>
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="posts" element={<Posts />} />
				<Route path="profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
