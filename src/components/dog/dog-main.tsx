import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { Breed, FullDogFragment } from "../../state/graphql";
import { LikeButton } from "../like-button";

import styles from "./dog.module.scss";

export const DogMain = ({
  dog,
  onLikeDog,
}: {
  dog: FullDogFragment;
  onLikeDog: () => Promise<void>;
}) => {
  const [sendingLike, setSendingLike] = useState(false);

  const handleClickLike = async () => {
    setSendingLike(true);
    await onLikeDog();
    setSendingLike(false);
  };

  return (
    <div className={styles.dog}>
      <p className={styles.name}>Name: {dog.name}</p>
      <div
        className={styles.photo}
        style={{ backgroundImage: `url(${dog.photo})` }}
      />

      <div className={styles.likes}>
        {sendingLike ? (
          <ClipLoader />
        ) : (
          <p>
            <i>{dog.likes}</i> likes
          </p>
        )}
        <LikeButton onClick={() => handleClickLike()} />
      </div>
      <p>
        {dog.name} is a {dog.breed === Breed.Labrador ? "labrador" : "poodle"}{" "}
      </p>
    </div>
  );
};
