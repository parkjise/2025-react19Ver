import React, { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <div>
      <button onClick={handleOpenModal}>열기</button>
      {modal && (
        <div>
          <h3>모달</h3>
          <p>내용입니다</p>
          <button onClick={handleCloseModal}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
