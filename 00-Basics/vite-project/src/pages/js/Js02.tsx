import { useState } from "react";

const Js02 = () => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
      <p>{input}</p>
    </div>
  );
};

export default Js02;
