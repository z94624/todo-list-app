import { useState } from "react";
import AddTodoInput from "../components/todos/AddTodoInput";
import TodoItem from "../components/todos/TodoItem";
import { v4 as uuid } from "uuid";

const initialTodos: Todo[] = [
  {
    text: "Learn TypeScript",
    complete: false,
  },
  {
    text: "Learn Spring Boot",
    complete: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo: ToggleTodo = (index: number) => {
    const newTodos: Todo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const deleteTodos: DeleteTodo = (index: number) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <main className="pt-5 mx-auto">
      <div className="container">
        <AddTodoInput onCreate={addTodo} />
        {todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={uuid()}
              index={index}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodos}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
