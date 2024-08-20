import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";
import { deleteTodo } from "../../apiFetches";
import { patchTodo } from "../../apiFetches";
import styles from "./todoItem.module.css";
import { Modal } from "../modal/Modal";
import { PathForm } from "../PathForm/PathForm";
import { useState } from "react";

export const TodoItem = ({ text, completed, number, key, id }) => {
  const [isPathOpen, setPathOpen] = useState(false);
  return (
    <div className={styles.todoItem} key={key}>
      <div className={styles.todoText}>
        <strong>
          {number}. {text}
        </strong>
      </div>

      <div className={styles.todoActions}>
        <MyInput type="checkbox" checked={completed} />
        <MyButton
          onClick={(e) => {
            e.stopPropagation();
            setPathOpen(true);
          }}
        >
          edit
        </MyButton>

        <MyButton
          onClick={() => {
            deleteTodo(id);
            location.reload();
          }}
        >
          delete
        </MyButton>
      </div>

      <Modal isOpen={isPathOpen} handleClose={() => setPathOpen(false)}>
        <PathForm text={text} id={id} />
      </Modal>
    </div>
  );
};
