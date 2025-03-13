import { useMemo, useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";

const useData = () => {
  const offset = useMemo(() => Math.floor(Math.random() * 1000 + 1), []);

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { offset },
  });
  const convertedData = useMemo(
    () =>
      data
        ? data.pokemons.results.map((pokemon, index) => {
            return {
              id: offset + index + 1,
              deck: 0,
              selected: false,
              ...pokemon,
            };
          })
        : [],
    [data, offset]
  );

  const [pokemons, setPokemons] = useState();
  useEffect(() => {
    setPokemons(convertedData);
  }, [convertedData]);

  const handleDropPoke = (deckId, pokemon) => {
    const _pokemons = [...pokemons];
    for (const _pokemon of _pokemons) {
      _pokemon.selected = false;
      if (_pokemon.id === pokemon.id) {
        _pokemon.deck = deckId;
        _pokemon.selected = true;
      }
    }

    setPokemons(_pokemons);
  };

  const handleClickPoke = (pokemon) => {
    const _pokemons = [...pokemons];
    for (const _pokemon of _pokemons) {
      _pokemon.selected = false;
      if (_pokemon.id === pokemon.id) {
        _pokemon.selected = true;
      }
    }

    setPokemons(_pokemons);
  };

  return {
    loading,
    error,
    pokemons,
    handleClickPoke,
    handleDropPoke,
  };
};

export default useData;
