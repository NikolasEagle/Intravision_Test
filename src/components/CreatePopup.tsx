import styles from "./CreatePopup.module.scss";

export default function CreatePopup() {
  return (
    <div className={styles.createPopup}>
      <div className={styles.header}>
        <p>Новая заявка</p>
        <div className={styles.close}></div>
      </div>
      <div className={styles.main}>
        <form>
          <div className={styles.fields}>
            <div>
              <label htmlFor="name">Название</label>
              <textarea
                required
                className={styles.name}
                id="name"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="desc">Описание</label>
              <textarea
                required
                className={styles.desc}
                id="desc"
                name="desc"
              />
            </div>
          </div>

          <div className={styles.save}>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
