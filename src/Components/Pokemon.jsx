import React from "react";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  return (
    <div>
      <h3>{`this is a pokemon page for pokemon #${pokemonId}`}</h3>
    </div>
  );
};

export default Pokemon;
