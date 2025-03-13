import React from "react";
import { useDrag } from "react-dnd";

import { CARD_TYPE } from "../configs";

const Card = ({ pokemon, onClick }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: CARD_TYPE,
    item: { pokemon },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  const handleClick = (e) => {
    onClick && onClick(pokemon);
  };

  return (
    <div
      ref={dragRef}
      className={"card" + (pokemon.selected ? " active" : "")}
      onClick={handleClick}
      style={{ opacity }}
      title={pokemon.name}
    >
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Card;
