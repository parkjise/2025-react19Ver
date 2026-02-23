import { useCallback, useState } from "react";
import "./App.css";
// import Counter from "./components/counter";
import Toggle from "./components/Toggle";
// import Loading from "./components/Loading";
import MultiFilterPanel from "./pages/MultiFilterPanel";
import City from "./pages/City";
import Array from "./pages/Array";
import Array02 from "./pages/Array02";
import Coupon from "./pages/Coupon";
import Test from "./pages/Test/Test";
import Controlled from "./pages/Controlled";
import FormState from "./pages/FormState";
import SelectCheckbox from "./pages/SelectCheckbox";

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
      <Array />
      <Array02 />
      <Coupon />
      <Test />
      <Controlled />
      <FormState />
      <SelectCheckbox />
    </>
  );
}

export default App;
