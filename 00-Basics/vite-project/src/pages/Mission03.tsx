import React, { useEffect, useState, type ChangeEvent } from "react";
type Query = { kw: string; cat: string; sort: string };
type Item = { id: string; title: string };
function mockFetch(
  query: Query,
  { signal }: { signal?: AbortSignal },
): Promise<Item[]> {
  return new Promise((resolve, reject) => {
    const delay = 400 + Math.floor(Math.random() * 300);
    const timer = setTimeout(() => {
      if (signal?.aborted) return;
      // 이미 abort된 경우 아무 것도 하지 않음
      const sample = Array.from({ length: 5 }, (_, i) => ({
        id: `${query.kw}-${query.cat}-${query.sort}-${i + 1}`,
        title: `[${query.cat}/${query.sort}]${query.kw}결과${i + 1}`,
      }));
      resolve(sample);
    }, delay);
    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      const err = new DOMException("Aborted", "AbortError");
      reject(err);
    });
  });
}

const Mission03 = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<string>("recent");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (keyword.trim() === "") {
      setItems([]);
      setLoading(false);
      setError("");
      return;
    }
    setLoading(true);
    setError("");
    const debounceMs = 400;

    const controller = new AbortController();

    const t = setTimeout(async () => {
      try {
        const data = await mockFetch(
          { kw: keyword?.trim(), cat: category, sort },
          { signal: controller.signal },
        );
        setItems(data);
      } catch (err) {
        if ((err as Error)?.name !== "AbortError") {
          setError("에러야");
          setItems([]);
        }
      } finally {
        setLoading(false);
      }
    }, debounceMs);

    return () => {
      clearTimeout(t);
      controller.abort();
    };
  }, [keyword, category, sort]);

  const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handlesort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };
  return (
    <section style={{ maxWidth: 640, margin: "32px auto" }}>
      <h2>🔎 실시간 검색</h2>
      <div
        style={{
          display: "grid",
          gap: 8,
          gridTemplateColumns: "1fr 140px 140px",
        }}
      >
        <input value={keyword} placeholder="검색어" onChange={handleKeyword} />
        <select value={category} onChange={handleCategory}>
          <option value="all">전체</option>
          <option value="book">도서</option>
          <option value="movie">영화</option>
        </select>
        <select value={category} onChange={handlesort}>
          <option value="recent">최신순</option>
          <option value="popular">인기순</option>
        </select>
      </div>
      <div style={{ marginTop: 16 }}>
        {keyword?.trim() === "" ? (
          <p>검색어를 입력하세요</p>
        ) : loading ? (
          <p>로딩중</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : items.length === 0 ? (
          <p>검색 결과가 없습니다</p>
        ) : (
          <ul style={{ paddingLeft: 16 }}>
            {items.map((it) => (
              <li key={it.id}>{it.title}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Mission03;
