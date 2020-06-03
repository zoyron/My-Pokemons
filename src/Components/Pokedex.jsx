import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import Pokecard from "./Pokecard";
import mockData from "../mockData";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "1.5em",
    paddingLeft: "3em",
    paddingRight: "3em",
  },
  appbarStyle: {
    backgroundColor: "#222",
  },
  progressStyle: {
    color: "#222",
    position: "fixed",
    top: "50%",
    left: "45%",
  },
});
const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);
  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appbarStyle}>
        <Toolbar>Sagar's Pokedex </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          <Pokecard />
          <Pokecard />
          <Pokecard />
          <Pokecard />
        </Grid>
      ) : (
        <CircularProgress className={classes.progressStyle} />
      )}
    </React.Fragment>
  );
};

export default Pokedex;
