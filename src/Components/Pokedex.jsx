import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
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
  cardStyle: {
    backgroundColor: "#f1f1f1",
    borderRadius: "7.5%",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  typoStyle: {
    fontSize: "1.0625rem",
    fontWeight: "bolder",
    color: "#666",
    letterSpacing: "0.25em",
  },
});

const Pokedex = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);
  const Pokecard = (pokemonId) => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const stripe = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const classes = useStyles();
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={pokemonId}>
        <Card
          className={classes.cardStyle}
          onClick={() => history.push(`/${pokemonId}`)}
        >
          <CardMedia
            className={classes.cardMedia}
            image={stripe}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="button" className={classes.typoStyle}>
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appbarStyle}>
        <Toolbar>Sagar's Pokedex </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) => Pokecard(pokemonId))}
        </Grid>
      ) : (
        <CircularProgress className={classes.progressStyle} />
      )}
    </React.Fragment>
  );
};

export default Pokedex;
