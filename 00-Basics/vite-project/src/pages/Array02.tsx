import { useState } from "react";

type Author = {
  name: string;
  email: string;
};

type Post = {
  id: number;
  title: string;
  author: Author;
};

const initialPosts: Post[] = [
  {
    id: 1,
    title: "첫 번째 글 ",
    author: {
      name: "철수",
      email: "chul@example.com",
    },
  },
  {
    id: 2,
    title: "두 번째 글 ",
    author: {
      name: "영희",
      email: "young@example.com",
    },
  },
];

const Array02 = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleNameChange = (id: number, newName: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              author: {
                ...post.author,
                name: newName,
              },
            }
          : post,
      ),
    );
  };
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <span>{post.title}</span>
          <span>
            {post.author.name} {post.author.email}
          </span>
          <button onClick={() => handleNameChange(post.id, "경수")}>
            이름 바꾸기
          </button>
        </div>
      ))}
    </>
  );
};

export default Array02;
