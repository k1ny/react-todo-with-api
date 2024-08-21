import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";
import { useRef } from "react";

export const PatchForm = ({ text, id, onSubmit }) => {
  const ref = useRef();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(id, { text: ref.current.value });
      }}
    >
      <MyInput placeholder={text} ref={ref} />
      <MyButton>edit</MyButton>
    </form>
  );
};
