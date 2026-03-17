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
import MemberForm from "./pages/MemberForm";
// import UseEffect02 from "./pages/UseEffect02";
import Resize from "./pages/Resize";
import Mission01 from "./pages/Mission01";
import Mission02 from "./pages/Mission02";
import Mission03 from "./pages/Mission03";
import Js01 from "./pages/js/js01";
import Js02 from "./pages/js/js02";
import Js03 from "./pages/js/js03";
import Js04 from "./pages/js/js04";
import Js05 from "./pages/js/js05";
import Js06 from "./pages/js/js06";
import Js08 from "./pages/js/js08";
import Js09 from "./pages/js/js09";
import Js10 from "./pages/js/js10";
import Js11 from "./pages/js/js11";
import Effect01 from "./pages/Effect/Effect01";
import Js12 from "./pages/js/Js12";
// import SearchFilter from "./pages/Exam/Search-filter/SearchFilter";
import SearchFilter from "./pages/Exam/Search-filter/SearchFilter02";
import Modal from "./pages/Test/Modal";

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
      {/* <Toggle onHandleToggle={handleToggle} toggle={toggle} /> */}
      {/* <Loading /> */}

      {/* <MultiFilterPanel />
      <City />
      <Array />
      <Array02 />
      <Coupon />
      <Test />
      <Controlled />
      <FormState />
      <SelectCheckbox />
      <MemberForm /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect02 onClose={() => setToggle(false)} /> */}
      {/* <Resize />
      <Mission01 />
      <Mission02 />
      <Mission03 /> */}
      {/* <Js05 /> */}
      {/* <Js06 /> */}
      {/* <Js08 /> */}
      {/* <Js09 /> */}
      {/* <Js10 userAge={46} useName="Parkjise" /> */}
      {/* <Js11 /> */}
      {/* <Effect01 /> */}
      {/* <Js12 /> */}
      {/* <SearchFilter /> */}
      {/* <SearchFilter /> */}
      <Modal />
    </>
  );
}

export default App;
