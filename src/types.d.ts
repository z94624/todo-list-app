// Type Declaration File：供全域使用

interface Todo {
  text: string;
  complete: boolean;
}

type AddTodo = (text: string) => void;

type ToggleTodo = (index: number) => void;

type DeleteTodo = (index: number) => void;

/*
 * Interfaces are better when you need to define a new object or method of an object.
 * Types are better when you need to create functions.
 */
