import styles from "./SearchBase.module.scss";
import SearchField from "./SearchField";

export default function SearchBase() {
  return (
    <header className={styles.base}>
      <div className={styles.logo}></div>
      <SearchField />
    </header>
  );
}
