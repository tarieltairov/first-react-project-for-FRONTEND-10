// Children
// children - вложенный jsx, который передается между открывающим и закрывающим тегом компонента

import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
