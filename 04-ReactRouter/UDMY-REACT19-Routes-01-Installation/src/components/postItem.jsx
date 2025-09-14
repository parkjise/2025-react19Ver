import { useParams, useLocation } from "react-router";

const PostItem = () => {
	let params = useParams();
	let location = useLocation();

	console.log(params);
	console.log(location);
	// go to database

	return (
		<>
			<h1>Post ID {params.id}</h1>
		</>
	);
};

export default PostItem;
