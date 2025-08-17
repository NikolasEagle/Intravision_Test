import styles from "./Tasks.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../store/slices/tasksSlice";
import { getStatuses } from "../store/slices/statusesSlice";
import Task from "./Task";

export default function Tasks() {
  const dispatch = useDispatch();

  const { loadingTasks, tasks, errorTasks } = useSelector(
    (state) => state.tasks
  );

  const { loadingStatuses, statuses, errorStatuses } = useSelector(
    (state) => state.statuses
  );

  useEffect(() => {
    dispatch(getTasks());
    dispatch(getStatuses());
  }, [dispatch]);

  return (
    <table className={styles.tasks}>
      <tr className={styles.header}>
        <td className={styles.id}>ID</td>
        <td className={styles.name}>Название</td>
        <td className={styles.status}>Статус</td>
        <td className={styles.executor}>Исполнитель</td>
      </tr>
      {"value" in tasks &&
        tasks.value.map((task) => (
          <Task
            id={task.id}
            name={task.name}
            statusId={task.statusId}
            executorName={task.executorName}
            statuses={statuses}
          />
        ))}
    </table>
  );
}
