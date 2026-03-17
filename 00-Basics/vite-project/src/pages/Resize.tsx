import React, { useEffect, useState } from "react";

const Resize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log("resize 이벤트 등록");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("resize 이벤트 제거됨");
    };
  }, []);

  return <div>현재창 너비 : {width}px</div>;
};

export default Resize;
