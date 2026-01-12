import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p>No todos yet</p>;
  }

  return (
    <ul style={{display:"flex",flexDirection:"column",gap:"12px"}}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
