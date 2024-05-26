import React from "react";
import ExampleComponent from "./components/ExampleComponent";

import styles from "./styles/styles.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1>Приложение-пример</h1>
      <ExampleComponent testProp="Hello world" />
    </div>
  );
}

export default App;
