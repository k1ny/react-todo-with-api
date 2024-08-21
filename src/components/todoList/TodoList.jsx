import { TodoItem } from "../todoItem/todoItem";
import styles from "./todoList.module.css";

export const TodoList = ({ todos, remove, handleUpdateTodo }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo, index) => (
        <TodoItem
          handleUpdateTodo={handleUpdateTodo}
          remove={remove}
          key={todo._id}
          number={index + 1}
          text={todo.text}
          completed={todo.completed}
          id={todo._id}
        />
      ))}
    </div>
  );
};
