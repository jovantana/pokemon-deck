import React from "react";

import Card from "./Card";

const SelectedCardDisplay = ({ pokemons }) => {
  const pokemon = pokemons.filter((pokemon) => pokemon.selected);

  return (
    <div className="selected-display">
      {pokemon.length > 0 ? <Card pokemon={pokemon[0]} /> : null}
    </div>
  );
};

export default SelectedCardDisplay;
