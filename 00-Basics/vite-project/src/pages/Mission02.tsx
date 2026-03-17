import { useEffect, useState, type ChangeEvent } from "react";

const styles = `
body { transition: background-color .2s ease, color .2s ease; } 
body.dark { background-color: #121212; color: #eaeaea; }

`;
const Mission02 = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    return () => {
      document.body.classList.remove("dark");
    };
  }, [dark]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDark(e.target.checked);
  };
  return (
    <section style={{ maxWidth: 560, margin: "32px auto" }}>
      <style>{styles}</style>
      <h2>다크모드 토글</h2>
      <label
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid #ddd",
        }}
      >
        <input type="checkbox" checked={dark} onChange={handleChange} />
        다크모드 켜기
      </label>
      <p style={{ marginTop: 12 }}>
        현재모드<strong>{dark ? "다크모드" : " 라이트모드"}</strong>
      </p>
    </section>
  );
};

export default Mission02;
