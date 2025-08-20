import { useDispatch, useSelector } from "react-redux";
import styles from "./EditPopup.module.scss";
import { OPENED, SELECT } from "../store/slices/editPopupSlice";
import { useEffect } from "react";

export default function EditPopup() {
  const dispatch = useDispatch();

  const opened = useSelector((state) => {
    return state.editPopup ? state.editPopup.opened : false;
  });

  const selectId = useSelector((state) => {
    return state.editPopup.selectId;
  });

  const { tasks } = useSelector((state) => state.tasks);

  const closeEditPopup = () => {
    dispatch(OPENED(false));
  };

  const getData = (selectId: number, data: any): any => {
    console.log(selectId);

    return "value" in tasks && selectId
      ? tasks.value.filter((task) => selectId === task.id).length > 0
        ? tasks.value.filter((task) => selectId === task.id)[0][data]
        : []
      : "";
  };

  return (
    <div
      style={opened ? { display: "flex" } : { display: "none" }}
      className={styles.editPopup}
    >
      <div className={styles.header}>
        <div className={styles.info}>
          <p className={styles.id}>{`№ ${getData(selectId, "id")}`}</p>
          <p className={styles.name}>{getData(selectId, "name")}</p>
        </div>
        <div onClick={closeEditPopup} className={styles.close}></div>
      </div>
      <div className={styles.main}>
        <div className={styles.main_left}>
          <div className={styles.save_wrapper}>
            <div className={styles.description_wrapper}>
              <div className={styles.description}>
                <p className={styles.data}>Описание</p>
                <p>{getData(selectId, "description")}</p>
              </div>
              <div className={styles.add_comments}>
                <p>Добавление комментариев</p>
              </div>
            </div>
            <div className={styles.save}>
              <button>Сохранить</button>
            </div>
          </div>
        </div>
        <div className={styles.main_right}>
          <div className={styles.tasker_wrapper}>
            <div className={styles.status}>
              <div
                style={{ background: getData(selectId, "statusRgb") }}
                className={styles.status_round}
              ></div>
              <p>{getData(selectId, "statusName")}</p>
            </div>
            <div className={styles.tasker}>
              <p className={styles.tasker_name}>Заявитель</p>
              <p>{getData(selectId, "initiatorName")}</p>
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.creator}>
              <p className={styles.creator_name}>Создана</p>
              <p>Маркова Анна</p>
            </div>
            <div className={styles.executor}>
              <p className={styles.executor_name}>Исполнитель</p>
              <p>{getData(selectId, "executorName")}</p>
            </div>
            <div className={styles.priority}>
              <p className={styles.priority_name}>Приоритет</p>
              <p>{getData(selectId, "priorityName")}</p>
            </div>
            <div className={styles.priority}>
              <p className={styles.priority_name}>Срок</p>
              <p>{getData(selectId, "resolutionDatePlan")}</p>
            </div>
            <div className={styles.tags}>
              <p className={styles.tags_name}>Теги</p>
              <div>
                {getData(selectId, "tags") &&
                  getData(selectId, "tags").map((tag) => (
                    <div className={styles.tag}>{tag.name}</div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
