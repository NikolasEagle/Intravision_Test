import styles from "./Main.module.scss";

import CreateTaskBase from "./CreateTaskBase";
import Tasks from "./Tasks";
import { useLocation } from "react-router-dom";

export default function Main() {
  const path = useLocation().pathname;
  switch (path) {
    case "/tasks":
      return (
        <main className={styles.main}>
          <CreateTaskBase />
          <Tasks />
        </main>
      );
      break;

    default:
      return <main className={styles.main}></main>;
      break;
  }
}
