import UseEffectComponent from "./UseEffect";
import Users from "./components/User";
import { MyProvider } from "./context";

const App = () => {
	return (
		<>
			{/* <UseEffectComponent /> */}
			{/* <UseRefComponent /> */}
			<MyProvider>
				<Users />
			</MyProvider>
		</>
	);
};

export default App;
