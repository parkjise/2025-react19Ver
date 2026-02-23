import React, { useState } from "react";

type Todo = { id: number; text: string; done: boolean };
const Array = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "공부하기",
      done: false,
    },
    {
      id: 2,
      text: "운동하기",
      done: false,
    },
  ]);

  const addTodo = () => {
    const nextId = todos.length + 1;
    setTodos([...todos, { id: nextId, text: "청소하기", done: false }]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.done ? <s>{todo.text}</s> : todo.text}
          </label>
          <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </p>
      ))}
      <button onClick={addTodo}>할 일 추가</button>
    </>
  );
};

export default Array;
