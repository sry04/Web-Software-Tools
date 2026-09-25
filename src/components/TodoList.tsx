interface TodoListProps {
  todos: string[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;