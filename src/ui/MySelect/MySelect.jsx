import styles from "./mySelect.module.css";
export const MySelect = ({ defaultValue, options, sortType }) => {
  return (
    <select
      onChange={(event) => sortType(event.target.value)}
      className={styles.mySelect}
    >
      <option value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
