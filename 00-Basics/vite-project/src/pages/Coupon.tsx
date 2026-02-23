import { useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "fashion";
  gift: boolean;
}

const ALL_DISCOUNT_RATE = 0.9;
const ELECTRONICS_DISCOUNT_RATE = 0.95;
const GIFT_THRESHOLD = 20000;
const DEFAULT_ITEMS: Item[] = [
  {
    id: 1,
    name: "노트북",
    price: 1200000,
    category: "electronics",
    gift: false,
  },
  {
    id: 2,
    name: "키보드",
    price: 50000,
    category: "electronics",
    gift: false,
  },
  {
    id: 3,
    name: "에코백",
    price: 19000,
    category: "fashion",
    gift: false,
  },
];

const Coupon = () => {
  const [discounted, setDiscounted] = useState(false);
  const [electronicsDiscounted, setelectronicsDiscounted] = useState(false);
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const handleOnsaleAll = () => {
    if (discounted) {
      return;
    }
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        price: Math.floor(item.price * ALL_DISCOUNT_RATE),
      })),
    );
    setDiscounted(true);
  };

  const handleElectronics = () => {
    if (!discounted || electronicsDiscounted) return;
    setItems((prev) =>
      prev.map((item) =>
        item.category === "electronics"
          ? {
              ...item,
              price: Math.floor(item.price * ELECTRONICS_DISCOUNT_RATE),
            }
          : item,
      ),
    );
    setelectronicsDiscounted(true);
  };

  const handleGift = () => {
    setItems((prev) =>
      prev.map((item) =>
        item.price < GIFT_THRESHOLD ? { ...item, gift: true } : item,
      ),
    );
  };

  const handleReset = () => {
    setItems(DEFAULT_ITEMS);
    setDiscounted(false);
    setelectronicsDiscounted(false);
  };
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>-----</span>
          <span>{item.price}원</span>
          <span>({item.category})</span>
          <span>{item.gift && "🎁 gift"}</span>
        </div>
      ))}
      <button onClick={handleOnsaleAll} disabled={discounted}>
        전체 10% 할인 클릭
      </button>
      <button onClick={handleElectronics} disabled={electronicsDiscounted}>
        전자제품만 5% 추가 할인
      </button>
      <button onClick={handleGift}>2만원 미만 무료증정 태그 달기</button>
      <button onClick={handleReset}>초기화</button>
    </>
  );
};

export default Coupon;
