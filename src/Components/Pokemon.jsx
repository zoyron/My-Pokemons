import React, { useState, useEffect } from "react";
import {
  Typography,
  CircularProgress,
  makeStyles,
  Button,
} from "@material-ui/core";
import axios from "axios";
const useStyles = makeStyles({
  progressStyle: {
    color: "#222",
    position: "fixed",
    top: "50%",
    left: "45%",
  },
});
const Pokemon = (props) => {
  const classes = useStyles();
  const { history, match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => {
        const { data } = response;
        setPokemon(data);
      })
      .catch((error) => {
        setPokemon(false);
      });
  }, [pokemonId]);
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
          alt=""
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
  return (
    <React.Fragment>
      {pokemon === undefined && (
        <CircularProgress className={classes.progressStyle} />
      )}
      {pokemon !== undefined && pokemon && generatePokemonJSX()}
      {pokemon === false && <Typography>Pokemon Not found</Typography>}
      {pokemon !== undefined && (
        <Button variant="outlined" onClick={() => history.push("/")}>
          Back to Pokedex
        </Button>
      )}
    </React.Fragment>
  );
};

export default Pokemon;
