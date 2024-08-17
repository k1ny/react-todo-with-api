import styles from "./myButton.module.css";

export const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myButton}>
      {children.toUpperCase()}
    </button>
  );
};
