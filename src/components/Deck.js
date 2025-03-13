import React, { useState } from "react";
import { useDrop } from "react-dnd";

import { CARD_TYPE } from "../configs";

import Card from "./Card";

const Deck = ({ deckId, initialName, pokemons, onClick, onDrop }) => {
  const [deckName, setDeckName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => setDeckName(e.target.value);
  const handleBlur = () => setIsEditing(false);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  const [{ isOver }, dropRef] = useDrop({
    accept: CARD_TYPE,
    drop: (item) => {
      onDrop && onDrop(deckId, item.pokemon);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  const border = isOver ? "1px solid grey" : "1px solid transparent";

  const availables = pokemons.filter((pokemon) => pokemon.deck === deckId);

  return (
    <div className="deck-container">
      {isEditing ? (
        <input
          type="text"
          value={deckName}
          onChange={handleNameChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="deck-name-input"
        />
      ) : (
        <h2 onClick={() => setIsEditing(true)} className="deck-name">
          {deckName}
        </h2>
      )}

      {/* Deck cards */}
      <div className="deck-cards" ref={dropRef} style={{ border }}>
        {availables.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default Deck;
