import { useCallback, useState } from "react";
import "./App.css";
// import Counter from "./components/counter";
import Toggle from "./components/Toggle";
// import Loading from "./components/Loading";
import MultiFilterPanel from "./pages/MultiFilterPanel";
import City from "./pages/City";

function App() {
  const [count, setCount] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <>
      {/* <Counter onIncrement={increment} value={count} /> */}
      <Toggle onHandleToggle={handleToggle} toggle={toggle} />
      {/* <Loading /> */}
      <hr />
      <hr />
      <hr />
      <hr />
      <MultiFilterPanel />
      <City />
    </>
  );
}

export default App;
