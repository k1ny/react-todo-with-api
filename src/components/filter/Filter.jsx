import { MyInput } from "../../ui/MyInput/MyInput";
import { MySelect } from "../../ui/MySelect/MySelect";
import styles from "./filter.module.css";

export const Filter = ({ onChangeSearch }) => {
  return (
    <MyInput
      className={styles.filterInput}
      placeholder="search..."
      onChange={(event) => onChangeSearch(event.target.value)}
    />
  );
};
