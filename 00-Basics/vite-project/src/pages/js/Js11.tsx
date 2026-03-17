import { useState } from "react";

const Js11 = () => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const handleCount = () => {
    if (liked) {
      setCount((prev) => Math.max(0, prev - 1));
      setLiked(false);
    } else {
      setCount((prev) => prev + 1);
      setLiked(true);
    }
  };
  return (
    <div>
      <p>좋아요 수{count}</p>
      <button onClick={handleCount}>{liked ? "좋아요 취소" : "좋아요 "}</button>
    </div>
  );
};

export default Js11;
