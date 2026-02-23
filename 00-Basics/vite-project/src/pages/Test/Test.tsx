import { useState } from "react";
import Checkbox from "./Checkbox";
import Summary from "./Summary";
import type { ChangeEvent } from "react";
const Test = () => {
  const [checked, setCheck] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };
  return (
    <>
      <Checkbox onChange={handleChange} checked={checked} />
      <Summary checked={checked} />
    </>
  );
};

export default Test;
