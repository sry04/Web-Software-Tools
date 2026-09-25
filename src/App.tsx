import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Filter = "all" | "active" | "completed";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Belajar React",
      completed: false,
    },
    {
      id: 2,
      text: "Mengerjakan tugas GitHub",
      completed: true,
    },
  ]);

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const startEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const updateTodo = (id: number, text: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: text,
            }
          : todo
      )
    );

    setEditingTodo(null);
  };

  const cancelEdit = () => {
    setEditingTodo(null);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <div className="app">
      <div className="container">
        <Header
          total={todos.length}
          completed={completedCount}
        />

        <TodoForm
          addTodo={addTodo}
          editingTodo={editingTodo}
          updateTodo={updateTodo}
          cancelEdit={cancelEdit}
        />

        <div className="filter">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            Semua
          </button>

          <button
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
          >
            Aktif
          </button>

          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Selesai
          </button>
        </div>

        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          startEdit={startEdit}
        />
      </div>
    </div>
  );
}

export default App;