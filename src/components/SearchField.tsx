import styles from "./SearchField.module.scss";

export default function SearchField() {
  return (
    <div className={styles.search}>
      <input
        placeholder="Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявки"
        className={styles.search_input}
      />
      <div className={styles.search_icon}></div>
    </div>
  );
}
