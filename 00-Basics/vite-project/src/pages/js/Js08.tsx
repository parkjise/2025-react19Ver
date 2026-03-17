import { useState } from "react";

const Js08 = () => {
  const [email, setEmail] = useState("");
  const [submitEmail, setSubmitEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitEmail(email);
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="이메일 입력"
        />
        <button type="submit">제출</button>
      </form>
      {submitEmail && <p>제출된 이메일 :{submitEmail}</p>}
    </div>
  );
};

export default Js08;
