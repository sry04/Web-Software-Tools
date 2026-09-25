import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Belajar React",
    "Mengerjakan tugas GitHub"
  ]);

  const addTodo = (todo: any) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <Header />

      <TodoForm addTodo={addTodo} />

      <TodoList todos={todos} />
    </div>
  );
}

export default App;