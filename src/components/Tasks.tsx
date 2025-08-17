import styles from "./Tasks.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../store/slices/tasksSlice";
import { getStatuses } from "../store/slices/statusesSlice";
import Task from "./Task";
import { getPriorities } from "../store/slices/prioritiesSlice";

export default function Tasks() {
  const dispatch = useDispatch();

  const { loadingTasks, tasks, errorTasks } = useSelector(
    (state) => state.tasks
  );

  const { loadingStatuses, statuses, errorStatuses } = useSelector(
    (state) => state.statuses
  );

  const { loadingPriorities, priorities, errorPriorities } = useSelector(
    (state) => state.priorities
  );

  useEffect(() => {
    dispatch(getStatuses());
    dispatch(getPriorities());
    dispatch(getTasks());
  }, [dispatch]);

  return (
    "value" in tasks && (
      <table className={styles.tasks}>
        <tr className={styles.header}>
          <td className={styles.priority}></td>
          <td className={styles.id}>ID</td>
          <td className={styles.name}>Название</td>
          <td className={styles.status}>Статус</td>
          <td className={styles.executor}>Исполнитель</td>
        </tr>
        {tasks.value.map((task) => (
          <Task
            id={task.id}
            name={task.name}
            executorName={task.executorName}
            statusId={task.statusId}
            statuses={statuses}
            priorityId={task.priorityId}
            priorities={priorities}
          />
        ))}
      </table>
    )
  );
}
