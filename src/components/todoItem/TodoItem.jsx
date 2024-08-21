import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";
import styles from "./todoItem.module.css";
import { Modal } from "../modal/Modal";
import { PatchForm } from "../PatсhForm/PatсhForm";
import { useState } from "react";

export const TodoItem = ({
  text,
  number,
  id,
  completed,
  handleUpdateTodo,
  remove,
}) => {
  const [isPathOpen, setPathOpen] = useState(false);

  return (
    <div className={styles.todoItem} key={id}>
      <div className={styles.todoText}>
        <strong>
          {number}. {text}
        </strong>
      </div>

      <div className={styles.todoActions}>
        <MyInput
          type="checkbox"
          checked={completed}
          onChange={(event) =>
            handleUpdateTodo(id, { completed: event.target.checked })
          }
        />
        <MyButton
          onClick={(e) => {
            e.stopPropagation();
            setPathOpen(true);
          }}
        >
          edit
        </MyButton>

        <MyButton onClick={() => remove(id)}>delete</MyButton>
      </div>

      <Modal isOpen={isPathOpen} handleClose={() => setPathOpen(false)}>
        <PatchForm
          text={text}
          id={id}
          onSubmit={(...args) => {
            setPathOpen(false);
            handleUpdateTodo(...args);
          }}
        />
      </Modal>
    </div>
  );
};
