import { useEffect } from "react";
import styles from "./Task.module.scss";

interface Props {
  id: number;
  name: string;
  statusId: number;
  executorName: string;
  statuses: { rgb: string; id: string; name: string }[];
}

export default function Task({
  id,
  name,
  statusId,
  executorName,
  statuses,
}: Props) {
  useEffect(() => {
    console.log(statuses);
  }, [statuses]);
  return (
    <tr className={styles.task}>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {
          statuses.map((status) => {
            if (status.id === statusId) {
              return status;
            }
          })[0]
        }
      </td>
      <td className={styles.executor}>{executorName}</td>
    </tr>
  );
}
