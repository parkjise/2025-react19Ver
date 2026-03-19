import React, { useEffect, useState } from "react";

const datas = ["김철수", "이영희", "오달수"];

export const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const userList = setTimeout(() => {
      setLoading(false);
      setUsers(datas);
    }, 2000);
    return () => {
      clearTimeout(userList);
    };
  }, []);
  if (loading) return <p>로딩중입니다</p>;
  return (
    <ul>
      {users.map((user, idx) => (
        <li key={idx}>{user}</li>
      ))}
    </ul>
  );
};
