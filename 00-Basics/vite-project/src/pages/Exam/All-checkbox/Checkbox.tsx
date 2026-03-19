import { useState } from "react";
import * as S from "./Check.styles";
import type { ChangeEvent } from "react";

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "김철수",
  },
  {
    id: 2,
    name: "이영희",
  },
  {
    id: 3,
    name: "홍길동",
  },
];

const Checkbox = () => {
  const [checkedUsers, setCheckedUsers] = useState<number[]>([]);

  // 전체 선택여부
  const isAllChecked = checkedUsers.length === users.length;
  /*
    선택된 사람 수와 전체 사람 수가 같으면
    전체 선택 체크박스가 체크됩니다.
  */

  // 전체 선택 / 해제
  const handleCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedUsers(users.map((user) => user.id));
    } else {
      setCheckedUsers([]);
    }
  };

  //개별 선택 / 해제
  const handleUserCheck = (id: number) => {
    setCheckedUsers((prev) =>
      prev.includes(id)
        ? prev.filter((userId) => userId !== id)
        : [...prev, id],
    );
  };

  return (
    <S.checkbox>
      <h1>회원 선택</h1>
      <label>
        <input
          type="checkbox"
          id="checkAll"
          onChange={handleCheckAll}
          checked={isAllChecked}
        />
        전체 선택
      </label>

      <div className="list">
        {users.map((user) => (
          <div className="item" key={user.id}>
            <label>
              <input
                type="checkbox"
                className="user-check"
                checked={checkedUsers.includes(user.id)}
                onChange={() => handleUserCheck(user.id)}
              />
              {user.name}
            </label>
          </div>
        ))}
      </div>
    </S.checkbox>
  );
};

export default Checkbox;
