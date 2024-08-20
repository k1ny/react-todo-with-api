import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";
import { deleteTodo } from "../../apiFetches";
import styles from "./todoItem.module.css";

export const TodoItem = ({ text, completed, number, key, id }) => {
  return (
    <div className={styles.todoItem} key={key}>
      <div className={styles.todoText}>
        <strong>
          {number}. {text}
        </strong>
      </div>

      <div className={styles.todoActions}>
        <MyInput type="checkbox" checked={completed} />
        <MyButton>edit</MyButton>
        <MyButton
          onClick={() => {
            deleteTodo(id);
            location.reload();
          }}
        >
          delete
        </MyButton>
      </div>
    </div>
  );
};
