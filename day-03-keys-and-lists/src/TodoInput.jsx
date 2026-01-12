import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <input style={{height:"30px"}}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button style={{marginLeft:"20px",backgroundColor:"white",color:"black"}}
      onClick={handleAdd} disabled={!text.trim()}>
        Add
      </button>
    </div>
  );
}
