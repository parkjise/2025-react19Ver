import { useState } from "react";

const MemberForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmaileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("이름을 입력하세요");
      return;
    }
    if (!email.includes("@")) {
      setError("이메일을 입력하세요");
      return;
    }
    if (!check) {
      setError("약관에 동의하세요");
      return;
    }

    setError("");
    alert(`${name} 님 회원가입을 축하합니다`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름:</label>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label>이메일:</label>
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          onChange={handleEmaileChange}
        />
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={handleCheckChange} checked={check} />
          약관에 동의 합니다.
        </label>
      </div>
      <div>
        <button type="submit">제출하기</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default MemberForm;
