import { gql, useQuery } from "@apollo/client";
import {
  DogListContainerQuery,
  DogListContainerQueryVariables,
} from "../../state/graphql";
import { Loader } from "../loader";

import { DogListMain } from "./dog-list-main";

const dogListContainerQuery = gql`
  fragment DogListFragment on Dog {
    id
    name
    likes
  }
  query DogListContainer {
    dogs {
      ...DogListFragment
    }
  }
`;

export const DogListContainer = ({
  handleSelectDog,
}: {
  handleSelectDog: ({ dogId }: { dogId: string }) => void;
}) => {
  const { loading, data } = useQuery<
    DogListContainerQuery,
    DogListContainerQueryVariables
  >(dogListContainerQuery);

  if (loading) return <Loader />;

  if (!data) return <p> Error ... </p>;

  return <DogListMain dogs={data.dogs} handleSelectDog={handleSelectDog} />;
};
