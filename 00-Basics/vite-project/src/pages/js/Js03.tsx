import { useState } from "react";

const Js03 = () => {
  const [isLogin, setisLogin] = useState(false);

  const handleLogin = () => {
    setisLogin(!isLogin);
  };
  return (
    <div>
      <p>{isLogin ? "환영합니다" : "로그인이 필요합니다"}</p>
      <button onClick={handleLogin}>{!isLogin ? "로그인" : "로그아웃"}</button>
    </div>
  );
};

export default Js03;
