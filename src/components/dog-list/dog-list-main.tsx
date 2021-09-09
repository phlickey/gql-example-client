import { Fragment } from "react";
import { DogListFragment } from "../../state/graphql";

import styles from "./dog-list.module.scss";

export const DogListMain = ({
  dogs,
  handleSelectDog,
}: {
  dogs: DogListFragment[];
  handleSelectDog: ({ dogId }: { dogId: string }) => void;
}) => {
  const sortedDogs = [...dogs].sort((a, b) => b.likes - a.likes);
  return (
    <div className={styles.dogList}>
      <div className={styles.header}>Dog Name</div>
      <div className={styles.header}>Likes</div>

      {sortedDogs.map((dog) => (
        <Fragment key={dog.id}>
          <div
            className={styles.row}
            onClick={() => handleSelectDog({ dogId: dog.id })}
          >
            {dog.name}
          </div>
          <div
            className={styles.row}
            onClick={() => handleSelectDog({ dogId: dog.id })}
          >
            {dog.likes}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
