import React, { useEffect, useState } from "react";

const Mission01 = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log(`현재 카운트1 ${count}`);

    return () => {
      console.log("Effect 정리됨(이전 count", count, ")");
    };
  }, [count]);

  return (
    <>
      <h2>카운터 로그 연습</h2>
      <p>현재카운트 {count}</p>
      <button onClick={handleCount}>+1</button>
    </>
  );
};

export default Mission01;
