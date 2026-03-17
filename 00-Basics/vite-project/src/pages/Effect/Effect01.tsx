import React, { useEffect, useState } from "react";

const Effect01 = () => {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState(1);

  useEffect(() => {
    if (mode === 1) {
      console.log("case1");
    } else if (mode === 2) {
      console.log("case2");
    } else {
      console.log("case3");
    }
  });
  useEffect(() => {
    setMode(2);
  }, []);
  useEffect(() => {
    setMode(3);
  }, [count]);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  const case1 = () => {};

  return (
    <div>
      <h2>useEffect의 의존성 배열 실습</h2>
      <p>현재 카운트 : {count}</p>
      <div>
        <button onClick={handleCount}>+1</button>
      </div>
      <div>
        <button onClick={case1}>Case 1 모든 렌더링</button>
      </div>
      <p>현재 선택된 케이스 : {mode}</p>
    </div>
  );
};

export default Effect01;
