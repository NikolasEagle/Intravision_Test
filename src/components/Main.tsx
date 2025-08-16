import styles from "./Main.module.scss";

import CreateTaskBase from "./CreateTaskBase";

export default function Main() {
  return (
    <main className={styles.main}>
      <CreateTaskBase />
    </main>
  );
}
