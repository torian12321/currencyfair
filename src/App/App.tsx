import React from "react";
import { Header } from "./Header";
import { Summary } from "./Summary";
import { Main } from "./Main";
import styles from "./App.module.scss";

// General layout distribution
const App: React.FC = () => (
  <div className={styles.App}>
    <Header className={styles.header} />
    <div className={styles.body}>
      <div className={styles.body_main}>
        <Main />
      </div>
      <div className={styles.body_aside}>
        <Summary />
      </div>
    </div>
  </div>
);

export { App };
