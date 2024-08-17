import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";

export const CreateForm = ({ createRef, createFunc }) => {
  return (
    <form onSubmit={() => createFunc(createRef)}>
      <MyInput ref={createRef} />
      <MyButton>create</MyButton>
    </form>
  );
};
