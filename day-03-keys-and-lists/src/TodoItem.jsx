export default function TodoItem({ todo, onDelete }) {
  return (
    
    <li >
      {todo.text}
      <button
        style={{ marginLeft: "20px", color: "red", backgroundColor: "white" }}
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
    
  );
}
