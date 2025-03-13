import React from "react";

import useData from "./hooks/useData";

import "./App.css";
import NewCardStack from "./components/NewCardStack";
import Deck from "./components/Deck";
import SelectedCardDisplay from "./components/SelectedCardDisplay";

function App() {
  const { loading, error, pokemons, handleClickPoke, handleDropPoke } = useData();

  return (
    <div className="app">
      {(() => {
        if (loading) return <h3 className="message">Loading data...</h3>;
        if (error)
          return <h3 className="message error">Error: {error.message}</h3>;

        return (
          <>
            <NewCardStack pokemons={pokemons} onClick={handleClickPoke} />
            <SelectedCardDisplay pokemons={pokemons} />
            <div className="decks">
              <Deck
                deckId={1}
                initialName="Deck 1"
                pokemons={pokemons}
                onClick={handleClickPoke}
                onDrop={handleDropPoke}
              />
              <Deck
                deckId={2}
                initialName="Deck 2"
                pokemons={pokemons}
                onClick={handleClickPoke}
                onDrop={handleDropPoke}
              />
            </div>
          </>
        );
      })()}
    </div>
  );
}

export default App;
