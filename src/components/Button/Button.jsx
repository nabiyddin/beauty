import styles from "./Button.module.scss";

function Button({ children, className, variant, type }) {
  return (
    <button
      type={type}
      className={`${styles.button}${className ? ` ${className}` : ""}${
        variant === "outlined" ? `${styles.outlined}` : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
