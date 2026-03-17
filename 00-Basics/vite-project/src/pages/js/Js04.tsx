import { useState } from "react";

const Js04 = () => {
  const datas = ["노트북", "마우스", "키보드"];

  return (
    <div>
      <ul>
        {datas.map((data, idx) => (
          <li key={idx}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Js04;
