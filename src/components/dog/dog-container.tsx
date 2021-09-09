import { gql, useMutation, useQuery } from "@apollo/client";
import {
  LikeDogMutation,
  LikeDogMutationVariables,
  SingleDogContainerQuery,
  SingleDogContainerQueryVariables,
} from "../../state/graphql";

import { DogMain } from "./dog-main";
import { Loader } from "../loader";

const singleDogQuery = gql`
  fragment FullDogFragment on Dog {
    id
    name
    likes
    photo
    breed
  }
  query SingleDogContainer($dogId: ID!) {
    dog(id: $dogId) {
      ...FullDogFragment
    }
  }
`;

const likeDogMutation = gql`
  mutation LikeDogMutation($dogId: ID!) {
    likeDog(dogId: $dogId) {
      id
      likes
    }
  }
`;

export const DogContainer = ({ dogId }: { dogId: string }) => {
  const { loading, data, error } = useQuery<
    SingleDogContainerQuery,
    SingleDogContainerQueryVariables
  >(singleDogQuery, {
    variables: { dogId: dogId },
  });

  const [fireLikeDogMutation] = useMutation<
    LikeDogMutation,
    LikeDogMutationVariables
  >(likeDogMutation);

  const onLikeDog = async () => {
    if (dogId) await fireLikeDogMutation({ variables: { dogId: dogId } });
  };

  if (loading) return <Loader />;

  if (error || !data) return <p>An error occurred...</p>;

  if (!data.dog) return <p>Dog not found</p>;

  return <DogMain dog={data.dog} onLikeDog={onLikeDog} />;
};
