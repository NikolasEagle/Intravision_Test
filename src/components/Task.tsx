import styles from "./Task.module.scss";
import Status from "./Status";
import Priority from "./Priority";

interface Props {
  id: number;
  name: string;
  executorName: string;
  statusId: number;
  statuses: { rgb: string; id: number; name: string }[];
  priorityId: number;
  priorities: { rgb: string; id: number; name: string }[];
}

export default function Task({
  id,
  name,
  executorName,
  statusId,
  statuses,
  priorityId,
  priorities,
}: Props) {
  return (
    <tr className={styles.task}>
      <td className={styles.priority}>
        <Priority priorities={priorities} priorityId={priorityId} />
      </td>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <Status statuses={statuses} statusId={statusId} />
      </td>
      <td className={styles.executor}>{executorName}</td>
    </tr>
  );
}
