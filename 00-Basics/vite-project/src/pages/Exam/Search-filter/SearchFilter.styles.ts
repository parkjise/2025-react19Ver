import styled from "styled-components";

export const SearchFilterRoot = styled.div`
  body {
    font-family: Arial, sans-serif;
    padding: 30px;
  }

  .search-box {
    width: 300px;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .item-list {
    list-style: none;
    padding: 0;
    width: 300px;
  }

  .item-list li {
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 8px;
    border-radius: 6px;
  }

  .hidden {
    display: none;
  }
`;
