import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";
import { patchTodo } from "../../apiFetches";
import { useRef } from "react";

export const PathForm = ({ text, id }) => {
  const ref = useRef();
  return (
    <form>
      <MyInput placeholder={text} ref={ref} />
      <MyButton onClick={() => patchTodo(id, { text: ref.current.value })}>
        edit
      </MyButton>
    </form>
  );
};
