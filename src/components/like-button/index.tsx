import thumbsUp from "./thumbs-up.svg";

import styles from "./like-button.module.scss";

export const LikeButton = ({ onClick }: { onClick: () => unknown }) => {
  return (
    <button className={styles.likeButton} onClick={onClick}>
      <img src={thumbsUp} alt="Thumbs Up" />
    </button>
  );
};
