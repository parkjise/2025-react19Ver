import { useState } from "react";

const datas = [
  {
    id: 1,
    product: "책상1",
    price: 45000,
  },
  {
    id: 2,
    product: "책상2",
    price: 15000,
  },
  {
    id: 3,
    product: "책상3",
    price: 35000,
  },
];
const Sort = () => {
  const sortProducts = [...datas].sort((a, b) => a.price - b.price);
  return (
    <ul>
      {sortProducts.map((item) => (
        <li key={item.id}>
          {item.product} - {item.price}
        </li>
      ))}
    </ul>
  );
};

export default Sort;
