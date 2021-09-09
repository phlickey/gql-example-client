import ClipLoader from "react-spinners/ClipLoader";

import styles from "./loader.module.scss";

export const Loader = () => (
  <div className={styles.loader}>
    <h2>Loading</h2>
    <ClipLoader />
  </div>
);
