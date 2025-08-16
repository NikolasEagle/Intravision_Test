import { useSelector } from "react-redux";
import styles from "./Menu.module.scss";
import Chapter from "./Chapter";

export default function Menu() {
  const chapters = useSelector((state) =>
    state.chapters ? state.chapters.chapters : []
  );

  console.log(chapters);

  return (
    <nav className={styles.menu}>
      {chapters.map((chapter) => (
        <Chapter path={chapter.path} name={chapter.name} />
      ))}
    </nav>
  );
}
