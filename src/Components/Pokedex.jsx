import React from "react";
import { AppBar, Toolbar, Grid, makeStyles } from "@material-ui/core";
import Pokecard from "./Pokecard";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
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
