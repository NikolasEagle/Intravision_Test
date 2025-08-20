import { useLocation } from "react-router-dom";
import styles from "./SearchBase.module.scss";
import SearchField from "./SearchField";
import { useSelector } from "react-redux";
import Header from "./Header";

export default function SearchBase() {
  const path = useLocation().pathname;
  const chapters = useSelector((state) =>
    state.chapters ? state.chapters.chapters : []
  );
  return (
    <header className={styles.base}>
      {path === "/tasks" ? (
        <SearchField />
      ) : (
        <Header
          name={
            chapters.filter((chapter) => {
              return chapter.path === path;
            })[0].name
          }
        />
      )}
    </header>
  );
}
