import { useRef } from "react";
import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";

const url = "http://localhost:5173/api";

async function createTodo(payload) {
  const response = await fetch(url + "/todos", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export const CreateForm = () => {
  const ref = useRef();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        createTodo({ text: ref.current.value });
      }}
    >
      <MyInput ref={ref} />
      <MyButton>create</MyButton>
    </form>
  );
};
