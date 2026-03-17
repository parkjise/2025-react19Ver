// import { SearchFilterRoot } from "./SearchFilter.styles";
import { useState } from "react";
import type { ChangeEvent } from "react";
import * as S from "./SearchFilter.styles";

const items = ["사과", "바나나", "오렌지", "포도", "딸기"];

const SearchFilter = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  return (
    <S.SearchFilterRoot>
      <h1>상품 검색</h1>
      <input
        type="text"
        id="searchInput"
        className="search-box"
        placeholder="상품명을 입력하세요"
        value={keyword}
        onChange={handleChange}
      />
      <ul className="item-list" id="itemList">
        {items.map((item, index) => {
          const isMatch = item.toLowerCase().includes(keyword.toLowerCase());
          return (
            <li key={index} className={isMatch ? "" : "hidden"}>
              {item}
            </li>
          );
        })}
      </ul>
    </S.SearchFilterRoot>
  );
};

export default SearchFilter;

/*
  입력창에 글자를 입력하면 아래 리스트에서 해당 글자가 포함된 항목만 보이도록 만드세요.
예)

사과 입력 → 사과만 표시
바 입력 → 바나나 표시
아무 것도 입력하지 않으면 전체 표시

*/
