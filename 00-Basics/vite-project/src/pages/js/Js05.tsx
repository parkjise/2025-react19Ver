import { useState } from "react";

const Js05 = () => {
  const [datas, setDatas] = useState([
    { id: 1, text: "노트북" },
    { id: 2, text: "키보드" },
    { id: 3, text: "마우스" },
  ]);

  const handleDelete = (id: number) => {
    const remove = datas.filter((data) => data.id !== id);
    setDatas(remove);
  };
  return (
    <div>
      <ul>
        {datas.map((data, id) => (
          <li key={id}>
            {data.text}
            <button onClick={() => handleDelete(data.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Js05;
