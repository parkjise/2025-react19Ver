import { useContext } from "react";
import { MyContext } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";

import Stage1 from "./components/stage_one";
import Stage2 from "./components/stage_two";
const App = () => {
	const context = useContext(MyContext);
	return (
		<div className="wrapper">
			<div className="center-wraper">
				<h1>Who Pays the bill</h1>
				{context.stage === 1 ? <Stage1 /> : <Stage2 />}
			</div>
		</div>
	);
};

export default App;
