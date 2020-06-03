import React from "react";
import { Grid, Card, CardContent, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  cardStyle: {
    backgroundColor: "#f1f1f1",
  },
});
const Pokecard = () => {
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.cardStyle}>
        <CardContent>
          This is a pokemon card. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate aut incidunt tempore itaque,
          exercitationem odit minus dignissimos nostrum provident laborum.
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Pokecard;
