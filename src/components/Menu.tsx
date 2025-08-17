import { useSelector } from "react-redux";
import styles from "./Menu.module.scss";
import Chapter from "./Chapter";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Menu() {
  const path = useLocation().pathname;

  const chapters = useSelector((state) =>
    state.chapters ? state.chapters.chapters : []
  );

  return (
    <nav className={styles.menu}>
      {chapters.map((chapter) => {
        const copyChapter = { ...chapter };
        if (copyChapter.path === path) {
          copyChapter.active = true;
        }
        return (
          <Chapter
            icon={copyChapter.icon}
            width={copyChapter.width}            height={copyChapter.height}
            path={copyChapter.path}
            name={copyChapter.name}
            active={copyChapter.active}
          />
        );
      })}
    </nav>
  );
}
