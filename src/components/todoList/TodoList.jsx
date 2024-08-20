import { TodoItem } from "../todoItem/todoItem";
import styles from "./todoList.module.css";

export const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo._id}
          number={index + 1}
          text={todo.text}
          completed={todo.checked}
          id={todo._id}
        />
      ))}
    </div>
  );
};
