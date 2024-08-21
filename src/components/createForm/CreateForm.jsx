import { useRef } from "react";
import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";
import styles from "./createForm.module.css";
import { createTodo } from "../../apiFetches.js";

export const CreateForm = ({ handleCreateTodo }) => {
  const ref = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateTodo({ text: ref.current.value });
      }}
      className={styles.createForm}
    >
      <MyInput ref={ref} />
      <MyButton>create</MyButton>
    </form>
  );
};
