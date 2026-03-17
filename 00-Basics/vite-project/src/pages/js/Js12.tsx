import { useState } from "react";
type Tab = "소개" | "리뷰" | "문의";
const Js12 = () => {
  const [tab, setTab] = useState<Tab>("소개");

  const handleTabClick = (selectedTab: Tab) => {
    setTab(selectedTab);
  };

  return (
    <div>
      <button onClick={() => handleTabClick("소개")}>소개</button>
      <button onClick={() => handleTabClick("리뷰")}>리뷰</button>
      <button onClick={() => handleTabClick("문의")}>문의</button>
      <div>
        {tab === "소개" && <p>소개 내용</p>}
        {tab === "리뷰" && <p>리뷰 내용</p>}
        {tab === "문의" && <p>문의 내용</p>}
      </div>
    </div>
  );
};

export default Js12;
