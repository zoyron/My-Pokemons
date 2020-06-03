import React, { useState, useEffect } from "react";
import {
  Typography,
  CircularProgress,
  makeStyles,
  Button,
  AppBar,
  Toolbar,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core";
import axios from "axios";
const useStyles = makeStyles({
  progressStyle: {
    color: "#222",
    position: "fixed",
    top: "50%",
    left: "45%",
  },
  appbarStyle: {
    backgroundColor: "#222",
    textAlign: "center",
  },
  cardStyle: {
    backgroundColor: "#f1f1f1",
    width: "80%",
    margin: "auto",
    marginTop: "5%",
    borderRadius: "12.5%",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  topText: {
    fontSize: "2rem",
    fontWeight: "bolder",
    letterSpacing: "4px",
    margin: "auto",
  },
  buttonClass: {
    fontWeight: "bold",
    backgroundColor: "#0f0f0f",
    color: "#fff",
  },
  typoStyle: {
    fontSize: "1.0625rem",
    fontWeight: "bolder",
    color: "#666",
    letterSpacing: "0.25em",
  },
  infoStyle: {
    fontSize: "1.5rem",
    fontWeight: "bolder",
    color: "#333",
    letterSpacing: "0.25em",
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
    const { name, id, species, height, weight, types } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    return (
      <React.Fragment>
        <AppBar position="static" className={classes.appbarStyle}>
          <Toolbar>
            <Typography
              variant="overline"
              className={classes.topText}
            >{`${name}`}</Typography>
          </Toolbar>
        </AppBar>
        <Card className={classes.cardStyle}>
          <CardMedia
            className={classes.cardMedia}
            image={fullImageUrl}
            style={{ width: "17.25rem", height: "17.25rem" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h4" className={classes.infoStyle}>
              Pokemon Information:
            </Typography>
            <Typography
              className={classes.typoStyle}
            >{`Species: ${species.name}`}</Typography>
            <Typography className={classes.typoStyle}>
              Height: {height}
            </Typography>
            <Typography className={classes.typoStyle}>
              Weight: {weight}
            </Typography>
            <Typography variant="h6" className={classes.typoStyle}>
              Types are as follows :
            </Typography>
            {types.map((typeInfo) => {
              const { type } = typeInfo;
              const { name } = type;
              return (
                <Typography
                  className={classes.typoStyle}
                  key={name}
                >{`${name}`}</Typography>
              );
            })}
          </CardContent>
        </Card>
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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ marginTop: "2%" }}
        >
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => history.push("/")}
              className={classes.buttonClass}
            >
              Back to Pokedex
            </Button>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Pokemon;
