import { useEffect } from "react";
import styles from "./Task.module.scss";
import Status from "./Status";

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
  return (
    <tr className={styles.task}>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <Status statuses={statuses} statusId={statusId} />
      </td>
      <td className={styles.executor}>{executorName}</td>
    </tr>
  );
}
