import React from "react";
import styles from "../styles/Button.module.css";

function Button(props) {
  console.log(styles);
  return <button className={styles.Button}>Кнопка</button>;
}

export default Button;
