import styles from "./Main.module.scss";

import CreateTaskBase from "./CreateTaskBase";
import Tasks from "./Tasks";

export default function Main() {
  return (
    <main className={styles.main}>
      <CreateTaskBase />
      <Tasks />
    </main>
  );
}
