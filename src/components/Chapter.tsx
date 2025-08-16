import styles from "./Chapter.module.scss";

interface Props {
  icon: string;
  width: string;
  height: string;
  path: string;
  name: string;
  active: boolean;
}

export default function Chapter({
  icon,
  width,
  height,
  path,
  name,
  active,
}: Props) {
  console.log(icon);
  return (
    <a className={styles.chapter} href={path}>
      <div
        className={styles.icon}
        style={{ backgroundImage: icon, width: width, height: height }}
      ></div>
      <p className={styles.name}>{name}</p>
    </a>
  );
}
