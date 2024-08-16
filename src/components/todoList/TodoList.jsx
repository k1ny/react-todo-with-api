import { TodoItem } from "../todoItem/todoItem";

export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          number={index}
          text={todo.text}
          completed={todo.checked}
        />
      ))}
    </>
  );
};
