import styles from "./Container.module.scss";

function Container({ children, className }) {
  return (
    <div className={`${styles.container}${className ? `${className}` : ""}`}>
      {children}
    </div>
  );
}

export default Container;
