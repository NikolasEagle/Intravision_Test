import { useDispatch } from "react-redux";
import styles from "./CreateTaskBase.module.scss";
import { OPENED } from "../store/slices/createPopupSlice";

export default function CreateTaskBase() {
  const dispatch = useDispatch();
  const openCreatePopup = () => {
    dispatch(OPENED(true));
  };
  return (
    <div className={styles.createTaskBase}>
      <button onClick={openCreatePopup} className={styles.create}>
        Создать заявку
      </button>
    </div>
  );
}
