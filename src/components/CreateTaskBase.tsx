import styles from "./CreateTaskBase.module.scss";

export default function CreateTaskBase() {
  return (
    <div className={styles.createTaskBase}>
      <button className={styles.create}>Создать заявку</button>
    </div>
  );
}
