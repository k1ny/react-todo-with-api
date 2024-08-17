import { MyInput } from "../../ui/MyInput/MyInput";
import { MySelect } from "../../ui/MySelect/MySelect";

export const Filter = ({ onChangeSearch, onChangeSort }) => {
  return (
    <div>
      <MyInput
        placeholder="search..."
        onChange={(event) => onChangeSearch(event.target.value)}
      />
      <MySelect
        defaultValue="sort by"
        options={[
          { value: "text", name: "by text" },
          { value: "completed", name: "by checkbox" },
        ]}
        onChange={(event) => onChangeSort(event.target.value)}
      />
    </div>
  );
};
