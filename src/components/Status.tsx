import { useEffect } from "react";
import styles from "./Status.module.scss";

interface Props {
  statuses: { rgb: string; id: number; name: string }[];
  statusId: number;
}

export default function Status({ statuses, statusId }: Props) {
  const name = statuses.filter((status) => statusId === status.id)[0].name;
  const color = statuses.filter((status) => statusId === status.id)[0].rgb;
  return (
    <div className={styles.status} style={{ background: color }}>
      {name}
    </div>
  );
}
