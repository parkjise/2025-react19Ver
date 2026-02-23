import { useState } from "react";

const Controlled = () => {
  const [value, setValue] = useState("");

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(`제출된 이름 ${value}`);
  };
  return (
    <div>
      <input type="text" onChange={handleValue} value={value} />

      <button type="submit" onClick={handleClick}>
        제출하기
      </button>
      <p>
        현재 입력값 :<span>{value}</span>
      </p>
    </div>
  );
};

export default Controlled;
