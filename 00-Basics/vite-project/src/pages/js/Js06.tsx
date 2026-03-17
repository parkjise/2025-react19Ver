import { useState, type ChangeEvent } from "react";

const Js06 = () => {
  const products = ["MacBook Pro", "iPhone 15", "Galaxy S24", "MacBook Air"];

  const [keyword, setKeyword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <div>
      <input type="text" onChange={handleChange} value={keyword} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Js06;

// 검색창에 입력한 값으로 상품 목록을 필터링하세요.
// 조건:
// 대소문자 구분 없이 검색
// includes() 사용
// 검색 결과만 화면에 출력
