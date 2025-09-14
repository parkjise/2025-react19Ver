import { BrowerRouter, Route, Routes } from "react-router";
import Posts from "./components/posts";
import Profile from "./components/profile";
import Home from "./components/home";
function App() {
	return (
		<BrowerRouter>
			<header>Header</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="posts" element={<Posts />} />
				<Route path="profile" element={<Profile />} />
			</Routes>
		</BrowerRouter>
	);
}

export default App;
