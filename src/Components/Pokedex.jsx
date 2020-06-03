import React from "react";
import { AppBar, Toolbar, Grid, makeStyles } from "@material-ui/core";
import Pokecard from "./Pokecard";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "1.5em",
    paddingLeft: "3em",
    paddingRight: "3em",
  },
});
const Pokedex = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>Sagar's Pokedex </Toolbar>
      </AppBar>
      <Grid container spacing={2} className={classes.pokedexContainer}>
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
      </Grid>
    </React.Fragment>
  );
};

export default Pokedex;
