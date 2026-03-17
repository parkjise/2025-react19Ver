import { useState } from "react";

const initialData = [
  { id: 1, text: "메일 보내기", completed: false },
  { id: 2, text: "회의 준비", completed: true },
];
const Js07 = () => {
  const [todos, setTodos] = useState(initialData);
  const handleChange = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            onChange={() => handleChange(todo.id)}
            checked={todo.completed}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Js07;
