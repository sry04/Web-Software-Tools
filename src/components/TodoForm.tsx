import { useState } from "react";

function TodoForm({ addTodo: any }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() === "") return;

    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ketik tugas..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button type="submit">Tambah</button>
    </form>
  );
}

export default TodoForm;