import React, { useEffect, useState, useRef } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState("Effect 준비 중...");
  const runRef = useRef(0);

  useEffect(() => {
    runRef.current += 1;
    console.log("Effect 실행: count =", count, "| run#", runRef.current);
    setLog(`Effect 실행 (count =${count}, run#${runRef.current})`);

    const id = setInterval(() => {
      console.log(`⏱ 타이머 동작 중... count =${count}`);
    }, 1000);
    return () => {
      console.log("🧹 Cleanup 실행 (이전 effect 정리) | run#", runRef.current);
      setLog(`🧹 Cleanup 실행 (count =${count}, run#${runRef.current})`);
      clearInterval(id);
    };
  });

  const handleCountPlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleCountMinus = () => {
    setCount((prev) => prev - 1);
  };

  const handleCountReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>현재카운트 :{count}</p>
      <p>최근 로그 :{log} </p>
      <button onClick={handleCountPlus}>증가</button>
      <button onClick={handleCountMinus}>감소</button>
      <button onClick={handleCountReset}>리셋</button>
    </div>
  );
};

export default UseEffect;
