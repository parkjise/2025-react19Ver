import { useState } from "react";
import styled from "styled-components";

const Menu = styled.div`
  .menu {
    display: none;
    border: 1px solid #ccc;
    width: 150px;
    padding: 10px;
    margin-top: 10px;
  }

  .menu.show {
    display: block;
  }
`;
const Toggle02 = () => {
  const [toggle, setToggle] = useState(false);

  const handleBtn = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Menu>
      <button id="menuBtn" onClick={handleBtn}>
        {toggle ? "메뉴 닫기" : "메뉴열기"}
      </button>
      <div id="menu" className={`menu ${toggle ? "" : "show"}`}>
        <div>마이페이지</div>
        <div>설정</div>
        <div>로그아웃</div>
      </div>
    </Menu>
  );
};

export default Toggle02;
