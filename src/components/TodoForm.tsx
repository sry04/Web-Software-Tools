import { useState, type FormEvent } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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