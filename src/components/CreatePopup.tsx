import { useDispatch, useSelector } from "react-redux";
import styles from "./CreatePopup.module.scss";
import { OPENED } from "../store/slices/createPopupSlice";

export default function CreatePopup() {
  const dispatch = useDispatch();

  const opened = useSelector((state) => {
    return state.createPopup ? state.createPopup.opened : false;
  });

  const closeCreatePopup = () => {
    dispatch(OPENED(false));
  };
  return (
    <div
      style={opened ? { display: "flex" } : { display: "none" }}
      className={styles.createPopup}
    >
      <div className={styles.header}>
        <p>Новая заявка</p>
        <div onClick={closeCreatePopup} className={styles.close}></div>
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
