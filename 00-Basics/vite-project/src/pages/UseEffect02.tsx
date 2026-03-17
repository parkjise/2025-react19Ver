import React, { useEffect } from "react";
type UseEffect02Props = {
  onClose: () => void;
};
const UseEffect02 = ({ onClose }: UseEffect02Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    console.log("ESC 이벤트 등록됨");

    return () => {
      window.removeEventListener("keydown", handleEsc);
      console.log("ESC 이벤트 제거됨");
    };
  }, []);

  return (
    <div
      className="modal"
      style={{
        border: "2px solid #ccc",
        borderRadius: 8,
        padding: 20,
        background: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        width: 300,
        textAlign: "center",
      }}
    >
      <h2>모달 창</h2>
      <p>ESC 키를 누르면 닫힙니다</p>
    </div>
  );
};

export default UseEffect02;
