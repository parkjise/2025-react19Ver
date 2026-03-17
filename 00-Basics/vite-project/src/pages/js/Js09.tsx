import { useEffect, useState } from "react";
const data = ["김철수", "이영희", "박민수"];

const Js08 = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(data);
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <p>로딩중입니다...</p>;
  }
  return (
    <div>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Js08;
