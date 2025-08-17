import styles from "./EditPopup.module.scss";

export default function EditPopup() {
  return (
    <div style={{ display: "none" }} className={styles.editPopup}>
      <div className={styles.header}>
        <p>Редактирование заявки</p>
        <div className={styles.close}></div>
      </div>
    </div>
  );
}
