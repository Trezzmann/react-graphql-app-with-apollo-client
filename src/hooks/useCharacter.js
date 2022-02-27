import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query getCharater($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  });
  return { error, loading, data };
};
