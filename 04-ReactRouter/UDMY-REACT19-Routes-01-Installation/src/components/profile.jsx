import { useNavigate, useSearchParams, Navigate } from "react-router";

const Profile = () => {
	let navigate = useNavigate();
	const [searchParams] = useSearchParams();

	console.log(searchParams.get("profile"));
	return (
		<>
			<h1>Profile</h1>
			<Navigate replace to="/" />
			<button onClick={() => navigate("/")}>Go to home</button>
		</>
	);
};

export default Profile;
