import { MyButton } from "../../ui/MyButton/MyButton";
import { MyInput } from "../../ui/MyInput/MyInput";

export const TodoItem = ({ text, completed, number }) => {
  return (
    <div>
      <div>
        <strong>
          {number}. {text}
        </strong>
        <MyInput type="checkbox" checked={completed} />
      </div>

      <div>
        <MyButton>edit</MyButton>
        <MyButton>delete</MyButton>
      </div>
    </div>
  );
};
