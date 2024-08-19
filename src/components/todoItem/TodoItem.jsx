import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";
import styles from "./todoItem.module.css";

export const TodoItem = ({ text, completed, number, deleteTodo, editTodo }) => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoText}>
        <strong>
          {number}. {text}
        </strong>
      </div>

      <div className={styles.todoActions}>
        <MyInput type="checkbox" checked={completed} />
        <MyButton onClick={() => editTodo()}>edit</MyButton>
        <MyButton onClick={deleteTodo}>delete</MyButton>
      </div>
    </div>
  );
};
