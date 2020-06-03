import React from "react";
import { AppBar, Toolbar, Grid, makeStyles } from "@material-ui/core";

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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          1
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          2
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          3
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Pokedex;
