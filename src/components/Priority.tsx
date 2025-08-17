import styles from "./Priority.module.scss";

interface Props {
  priorities: { rgb: string; id: number; name: string }[];
  priorityId: number;
}

export default function Priority({ priorities, priorityId }: Props) {
  const color = priorities.filter((priority) => priorityId === priority.id)[0]
    .rgb;
  return <div className={styles.priority} style={{ background: color }}></div>;
}
