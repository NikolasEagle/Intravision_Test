import styles from "./Chapter.module.scss";

export default function Chapter({ path, name, active }) {
  return <a href={path}>{name}</a>;
}
