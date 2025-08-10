import { useNavigate, useSearchParams } from "react-router";

const Profile = () => {
	let navigate = useNavigate();
	const [searchParams] = useSearchParams();

	console.log(searchParams.get("profile"));
	return (
		<>
			<h1>Profile</h1>
			<button onClick={() => navigate("/")}>Go to home</button>
		</>
	);
};

export default Profile;
