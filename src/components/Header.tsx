import styles from "./Header.module.scss";

interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  return <h2 className={styles.header}>{name}</h2>;
}
