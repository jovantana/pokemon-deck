import { gql } from "@apollo/client";

// Since pokemons count is defined as 10 in the assignment description,
// limit param is expressed as a constant.

export const GET_POKEMONS = gql`
  query pokemons($offset: Int) {
    pokemons(limit: 10, offset: $offset) {
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;
