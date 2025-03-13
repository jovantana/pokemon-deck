import React from "react";

import Card from "./Card";

import emptyIcon from "../assets/empty.png";

const NewCardStack = ({ pokemons, onClick }) => {
  const remains = pokemons.filter((pokemon) => pokemon.deck === 0);

  return (
    <div className="card-stack-container">
      <div className="card-stack">
        <h3> Card Stack</h3>
        {remains.length > 0 ? (
          <Card pokemon={remains[0]} onClick={onClick} />
        ) : (
          <div style={{ height: "5.5rem" }}>
            <img
              src={emptyIcon}
              style={{
                width: 60,
                height: "auto",
                marginTop: 10,
                opacity: 0.1,
              }}
              alt="Empty"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewCardStack;
