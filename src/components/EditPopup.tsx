import { useDispatch, useSelector } from "react-redux";
import styles from "./EditPopup.module.scss";
import { OPENED } from "../store/slices/editPopupSlice";
import { useEffect, useState } from "react";
import { getTasks } from "../store/slices/tasksSlice";

export default function EditPopup() {
  const dispatch = useDispatch();

  const opened = useSelector((state) => {
    return state.editPopup ? state.editPopup.opened : false;
  });

  const selectId = useSelector((state) => {
    return state.editPopup.selectId;
  });

  const { tasks } = useSelector((state) => state.tasks);

  const statuses = useSelector((state) =>
    state.statuses ? state.statuses.statuses : []
  );

  const users = useSelector((state) => (state.users ? state.users.users : []));

  const closeEditPopup = () => {
    dispatch(OPENED(false));
    setStatus("");
  };

  const getData = (selectId: number, data: any): any => {
    return "value" in tasks && selectId
      ? tasks.value.filter((task) => selectId === task.id).length > 0
        ? tasks.value.filter((task) => selectId === task.id)[0][data]
        : []
      : "";
  };

  const [status, setStatus] = useState<string>(getData(selectId, "statusName"));

  const [statusColor, setStatusColor] = useState({
    background: getData(selectId, "statusRgb"),
  });

  const [user, setUser] = useState<string>(getData(selectId, "executorName"));

  const [activeAddComment, setActiveAddComment] = useState<boolean>(false);

  const changeStatus = (e) => {
    setStatus(e.target.value);
    console.log(statuses);
    setStatusColor({
      background: statuses.filter((status) => status.name === e.target.value)[0]
        .rgb,
    });
  };

  const changeExecutor = (e) => {
    setUser(e.target.value);
  };

  const openCreateComment = () => {
    setActiveAddComment(!activeAddComment);
  };

  const editInfo = () => {};

  useEffect(() => {
    setStatus(getData(selectId, "statusName"));
    setUser(getData(selectId, "executorName"));
    setStatusColor({
      background: getData(selectId, "statusRgb"),
    });
    dispatch(getTasks());
  }, [selectId, tasks]);

  return (
    <form onSubmit={editInfo}>
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
            <div className={styles.comment_wrapper}>
              <div className={styles.save_wrapper}>
                <div className={styles.description_wrapper}>
                  <div className={styles.description}>
                    <p className={styles.data}>Описание</p>
                    <p>{getData(selectId, "description")}</p>
                  </div>
                  <div className={styles.add_comments}>
                    <p onClick={openCreateComment}>Добавление комментариев</p>
                    {activeAddComment && (
                      <textarea name="comment" id="comment"></textarea>
                    )}
                  </div>
                </div>
                <div className={styles.save}>
                  <button type="submit">Сохранить</button>
                </div>
              </div>
              {getData(selectId, "comment") && (
                <div className={styles.comment}>
                  <div className={styles.avatar}></div>
                  <div className={styles.comment_info}>
                    <p className={styles.comment_name}>
                      {getData(selectId, "initiatorName")}
                    </p>
                    <p
                      className={styles.comment_date}
                    >{`${new Date().toDateString()}`}</p>
                    <div className={styles.comment_content}>
                      <p>{getData(selectId, "comment")}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.main_right}>
            <div className={styles.tasker_wrapper}>
              <div className={styles.status}>
                <div style={statusColor} className={styles.status_round}></div>
                <select value={status} onChange={changeStatus}>
                  {statuses.length > 0 &&
                    statuses.map((status) => (
                      <option value={status.name}>{status.name}</option>
                    ))}
                </select>
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
                <select value={user} onChange={changeExecutor}>
                  {users.length > 0 &&
                    users.map((user) => (
                      <option value={user.name}>{user.name}</option>
                    ))}
                </select>
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
    </form>
  );
}
