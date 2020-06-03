import React, { useState } from "react";
import mockData from "../mockData";
import { Typography } from "@material-ui/core";
const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);
  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <React.Fragment>
        <Typography variant="h2">
          {`${name}`}
          <img src={front_default} alt="" />
        </Typography>
        <img
          src={fullImageUrl}
          style={{ width: "17.25rem", height: "17.25rem" }}
        />
        <Typography variant="h4">Pokemon Information:</Typography>
        <Typography>{`Species: ${species.name}`}</Typography>
        <Typography>Height: {height}</Typography>
        <Typography>Weight: {weight}</Typography>
        <Typography variant="h6">Types</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}>{`${name}`}</Typography>;
        })}
      </React.Fragment>
    );
  };
  return <React.Fragment>{generatePokemonJSX()}</React.Fragment>;
};

export default Pokemon;
