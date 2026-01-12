import { useState } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text
      }
    ]);
  }

  function deleteTodo(id) {
    setTodos(prev =>
      prev.filter(todo => todo.id !== id)
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
