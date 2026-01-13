import React, { useState } from "react";

type FilterState = {
  text: string;
  isSale: boolean;
  category: string;
};

const INITIAL_FILTER: FilterState = {
  text: "",
  isSale: false,
  category: "all",
};

const MultiFilterPanel = () => {
  const [filter, setFilter] = useState<FilterState>(INITIAL_FILTER);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, text: e.target.value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, isSale: e.target.checked }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleReset = () => {
    setFilter(INITIAL_FILTER);
  };

  return (
    <div style={styles.container}>
      <input
        placeholder="검색어를 입력하세요"
        onChange={handleTextChange}
        value={filter.text}
        style={styles.input}
      />
      <label>
        <input
          type="checkbox"
          checked={filter.isSale}
          onChange={handleCheckboxChange}
        />
        세일 상품만 보기
      </label>
      <select
        value={filter.category}
        onChange={handleCategoryChange}
        style={styles.select}
      >
        <option value="all">all</option>
        <option value="clothes">clothes</option>
        <option value="electronics">electronics</option>
      </select>
      <p style={styles.resultBox}>
        입력한 텍스트: {filter.text}
        <br />
        세일만 보기:{filter.isSale ? "켜짐" : "꺼짐"} <br />
        카테고리:{filter.category}
      </p>

      <button onClick={handleReset} style={styles.button}>
        초기화
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "360px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },
  select: {
    padding: "8px",
  },
  resultBox: {
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "0.9rem",
  },
  button: {
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default MultiFilterPanel;
