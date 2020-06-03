import React, { useState, useEffect } from "react";
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
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "1.5em",
    paddingLeft: "2em",
    paddingRight: "2em",
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
    borderRadius: "15%",
    borderBottomColor: "#222",
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
  searchContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

const Pokedex = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");
  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=808")
      .then((response) => {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);
  const Pokecard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];

    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={pokemonId}>
        <Card
          className={classes.cardStyle}
          onClick={() => history.push(`/${pokemonId}`)}
        >
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
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
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              onChange={handleSearchChange}
              className={classes.searchField}
              label="Pokemon"
              variant="outlined"
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) &&
              Pokecard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress className={classes.progressStyle} />
      )}
    </React.Fragment>
  );
};

export default Pokedex;
