import { useDispatch, useSelector } from "react-redux";
import styles from "./CreatePopup.module.scss";
import { OPENED } from "../store/slices/createPopupSlice";
import { OPENED as OPENEDEDIT, SELECT } from "../store/slices/editPopupSlice";
import { getTasks, postTasks } from "../store/slices/tasksSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { store } from "../store/configureStore";

export default function CreatePopup() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const opened = useSelector((state) => {
    return state.createPopup ? state.createPopup.opened : false;
  });

  const { selectedId, tasks } = useSelector((state) => state.tasks);

  const closeCreatePopup = () => {
    dispatch(OPENED(false));
  };

  const createTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name");

    const description = formData.get("description");

    const body = JSON.stringify({
      name: name,
      description: description,
      comment: "",
      price: 100,
      taskTypeId: 56915,
      statusId: 73833,
      priorityId: 68193,
      serviceId: 56916,
      resolutionDatePlan: new Date().toISOString(),
      tags: [68379],
      initiatorId: 56917,
      executorId: 56916,
      executorGroupId: 56916,
    });
    event.target.querySelector("#name").value = "";
    event.target.querySelector("#description").value = "";
    const response = await store.dispatch(postTasks(body));
    dispatch(OPENED(false));
    await store.dispatch(SELECT(response.payload));
    dispatch(OPENEDEDIT(true));
  };

  useEffect(() => {
    dispatch(getTasks());
  }, [tasks]);
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
        <form onSubmit={createTask}>
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
                id="description"
                name="description"
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
