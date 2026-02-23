import React, { useState } from "react";

const FormState = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`제출된 정보 : ${info.name},${info.email},${info.age}`);
  };

  return (
    <form onSubmit={hadleSubmit}>
      <div>
        <h3>#초기화면</h3>
        <p>
          이름:{" "}
          <input
            type="text"
            value={info.name}
            name="name"
            onChange={handleChange}
          />
        </p>
        <p>
          이메일:
          <input
            type="text"
            value={info.email}
            name="email"
            onChange={handleChange}
          />
        </p>
        <p>
          나이:
          <input
            type="text"
            name="age"
            value={info.age}
            onChange={handleChange}
          />
        </p>
        <button type="submit">제출하기</button>
        <p>
          현재 입력값 {info.name},{info.email},{info.age}
        </p>
      </div>
    </form>
  );
};

export default FormState;
