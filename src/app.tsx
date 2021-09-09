import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./state/graphql";

import { DogList } from "./components/dog-list";
import { Dog } from "./components/dog";

import styles from "./app.module.scss";

export const App = () => {
  const [currentDogId, setCurrentDogId] = useState<string>();

  const handleSelectDog = ({ dogId }: { dogId: string }) =>
    setCurrentDogId(dogId);

  return (
    <ApolloProvider client={apolloClient}>
      <div className={styles.container}>
        <div className={styles.left}>
          <DogList handleSelectDog={handleSelectDog} />
        </div>
        <div className={styles.right}>
          {!currentDogId ? <p>Select a dog</p> : <Dog dogId={currentDogId} />}
        </div>
      </div>
    </ApolloProvider>
  );
};
