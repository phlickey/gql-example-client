import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Breed {
  Labrador = 'LABRADOR',
  Poodle = 'POODLE'
}

export type Dog = {
  __typename?: 'Dog';
  breed: Breed;
  id: Scalars['ID'];
  likes: Scalars['Int'];
  name: Scalars['String'];
  owner: Person;
  photo: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  likeDog?: Maybe<Dog>;
  renameDog?: Maybe<Dog>;
  renameOwner?: Maybe<Person>;
};


export type MutationLikeDogArgs = {
  dogId: Scalars['ID'];
};


export type MutationRenameDogArgs = {
  dogId: Scalars['ID'];
  newName: Scalars['String'];
};


export type MutationRenameOwnerArgs = {
  newFirstName?: Maybe<Scalars['String']>;
  newLastName?: Maybe<Scalars['String']>;
  personId: Scalars['ID'];
};

export type Person = {
  __typename?: 'Person';
  dogs: Array<Dog>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dog?: Maybe<Dog>;
  dogs: Array<Dog>;
  people: Array<Person>;
  person?: Maybe<Person>;
};


export type QueryDogArgs = {
  id: Scalars['ID'];
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};

export type DogListFragment = { __typename?: 'Dog', id: string, name: string, likes: number };

export type DogListContainerQueryVariables = Exact<{ [key: string]: never; }>;


export type DogListContainerQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'Dog', id: string, name: string, likes: number }> };

export type FullDogFragment = { __typename?: 'Dog', id: string, name: string, likes: number, photo: string, breed: Breed };

export type SingleDogContainerQueryVariables = Exact<{
  dogId: Scalars['ID'];
}>;


export type SingleDogContainerQuery = { __typename?: 'Query', dog?: Maybe<{ __typename?: 'Dog', id: string, name: string, likes: number, photo: string, breed: Breed }> };

export type LikeDogMutationVariables = Exact<{
  dogId: Scalars['ID'];
}>;


export type LikeDogMutation = { __typename?: 'Mutation', likeDog?: Maybe<{ __typename?: 'Dog', id: string, likes: number }> };

export const DogListFragmentDoc = gql`
    fragment DogListFragment on Dog {
  id
  name
  likes
}
    `;
export const FullDogFragmentDoc = gql`
    fragment FullDogFragment on Dog {
  id
  name
  likes
  photo
  breed
}
    `;
export const DogListContainerDocument = gql`
    query DogListContainer {
  dogs {
    ...DogListFragment
  }
}
    ${DogListFragmentDoc}`;

/**
 * __useDogListContainerQuery__
 *
 * To run a query within a React component, call `useDogListContainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useDogListContainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDogListContainerQuery({
 *   variables: {
 *   },
 * });
 */
export function useDogListContainerQuery(baseOptions?: Apollo.QueryHookOptions<DogListContainerQuery, DogListContainerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DogListContainerQuery, DogListContainerQueryVariables>(DogListContainerDocument, options);
      }
export function useDogListContainerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DogListContainerQuery, DogListContainerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DogListContainerQuery, DogListContainerQueryVariables>(DogListContainerDocument, options);
        }
export type DogListContainerQueryHookResult = ReturnType<typeof useDogListContainerQuery>;
export type DogListContainerLazyQueryHookResult = ReturnType<typeof useDogListContainerLazyQuery>;
export type DogListContainerQueryResult = Apollo.QueryResult<DogListContainerQuery, DogListContainerQueryVariables>;
export const SingleDogContainerDocument = gql`
    query SingleDogContainer($dogId: ID!) {
  dog(id: $dogId) {
    ...FullDogFragment
  }
}
    ${FullDogFragmentDoc}`;

/**
 * __useSingleDogContainerQuery__
 *
 * To run a query within a React component, call `useSingleDogContainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleDogContainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleDogContainerQuery({
 *   variables: {
 *      dogId: // value for 'dogId'
 *   },
 * });
 */
export function useSingleDogContainerQuery(baseOptions: Apollo.QueryHookOptions<SingleDogContainerQuery, SingleDogContainerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleDogContainerQuery, SingleDogContainerQueryVariables>(SingleDogContainerDocument, options);
      }
export function useSingleDogContainerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleDogContainerQuery, SingleDogContainerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleDogContainerQuery, SingleDogContainerQueryVariables>(SingleDogContainerDocument, options);
        }
export type SingleDogContainerQueryHookResult = ReturnType<typeof useSingleDogContainerQuery>;
export type SingleDogContainerLazyQueryHookResult = ReturnType<typeof useSingleDogContainerLazyQuery>;
export type SingleDogContainerQueryResult = Apollo.QueryResult<SingleDogContainerQuery, SingleDogContainerQueryVariables>;
export const LikeDogMutationDocument = gql`
    mutation LikeDogMutation($dogId: ID!) {
  likeDog(dogId: $dogId) {
    id
    likes
  }
}
    `;
export type LikeDogMutationMutationFn = Apollo.MutationFunction<LikeDogMutation, LikeDogMutationVariables>;

/**
 * __useLikeDogMutation__
 *
 * To run a mutation, you first call `useLikeDogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeDogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeDogMutation, { data, loading, error }] = useLikeDogMutation({
 *   variables: {
 *      dogId: // value for 'dogId'
 *   },
 * });
 */
export function useLikeDogMutation(baseOptions?: Apollo.MutationHookOptions<LikeDogMutation, LikeDogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeDogMutation, LikeDogMutationVariables>(LikeDogMutationDocument, options);
      }
export type LikeDogMutationHookResult = ReturnType<typeof useLikeDogMutation>;
export type LikeDogMutationMutationResult = Apollo.MutationResult<LikeDogMutation>;
export type LikeDogMutationMutationOptions = Apollo.BaseMutationOptions<LikeDogMutation, LikeDogMutationVariables>;