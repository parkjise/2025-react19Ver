import { useState } from "react";

const Js01 = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      {count} <button onClick={handleCount}>1씩 증가</button>
    </div>
  );
};

export default Js01;
