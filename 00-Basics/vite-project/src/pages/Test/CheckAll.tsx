import { useState } from "react";

const datas = [
  {
    id: 1,
    name: "HTML",
    checked: false,
  },
  {
    id: 2,
    name: "CSS",
    checked: false,
  },
  {
    id: 3,
    name: "JS",
    checked: false,
  },
];

const CheckAll = () => {
  const [lists, setLists] = useState(datas);

  const allChecked = lists.every((list) => list.checked);

  const handleBtn = () => {
    setLists(lists.map((list) => ({ ...list, checked: !allChecked })));
  };

  const handleOneCheck = (id: number) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, checked: !list.checked } : list,
      ),
    );
  };
  return (
    <div>
      <button onClick={handleBtn}>
        {allChecked ? "선택해제" : "전체선택"}
      </button>
      {lists.map((list) => (
        <div key={list.id}>
          <label>
            <input
              type="checkbox"
              checked={list.checked}
              onChange={() => handleOneCheck(list.id)}
            />
            {list.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckAll;
