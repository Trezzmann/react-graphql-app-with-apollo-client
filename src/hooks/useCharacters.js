import { gql, useQuery } from "@apollo/client";

const GET_CARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, loading, data } = useQuery(GET_CARACTERS);
  return { error, loading, data };
};
