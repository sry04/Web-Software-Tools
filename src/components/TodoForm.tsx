import { useEffect, useState, type FormEvent } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoFormProps {
  addTodo: (text: string) => void;
  editingTodo: Todo | null;
  updateTodo: (id: number, text: string) => void;
  cancelEdit: () => void;
}

function TodoForm({
  addTodo,
  editingTodo,
  updateTodo,
  cancelEdit,
}: TodoFormProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(editingTodo ? editingTodo.text : "");
  }, [editingTodo]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (editingTodo) {
      updateTodo(editingTodo.id, text);
    } else {
      addTodo(text);
    }

    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Masukkan tugas..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        {editingTodo ? "Simpan" : "Tambah"}
      </button>

      {editingTodo && (
        <button
          type="button"
          className="cancel-button"
          onClick={cancelEdit}
        >
          Batal
        </button>
      )}
    </form>
  );
}

export default TodoForm;