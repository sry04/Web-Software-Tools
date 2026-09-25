interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  startEdit: (todo: Todo) => void;
}

function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  startEdit,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="empty">
        <h3>Tidak ada tugas</h3>
        <p>Belum ada tugas yang ditambahkan.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          className={`todo-item ${
            todo.completed ? "completed" : ""
          }`}
          key={todo.id}
        >
          <button
            className="check-button"
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.completed ? "✓" : ""}
          </button>

          <span className="todo-text">{todo.text}</span>

          <button
            className="edit-button"
            onClick={() => startEdit(todo)}
          >
            Edit
          </button>

          <button
            className="delete-button"
            onClick={() => deleteTodo(todo.id)}
          >
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;