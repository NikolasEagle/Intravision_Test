import styles from "./Chapter.module.scss";

export default function Chapter({ path, name, active }) {
  console.log(path);
  return (
    <a className={styles.chapter} href={path}>
      <div className={styles.icon}></div>
      <p className={styles.name}>{name}</p>
    </a>
  );
}
