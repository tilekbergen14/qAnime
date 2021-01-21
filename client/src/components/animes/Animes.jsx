import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Box from "../additinalComps/box";
import SearchInput from "../additinalComps/SearchInput";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: 60,
  },
  paper: {
    backgroundColor: "white",
    height: 200,
    width: 150,
    margin: "auto",
  },
  title: {
    margin: 20,
    textShadow: "2px 2px 4px #55cbb3",
    textAlign: "center"
  },
  search: {
    display: "flex",
    alignItems: "center",
  },
  margin: {
    marginTop: 20,
  },
}));

export default function Animes() {
  const classes = useStyles();
  const animes = useSelector((state) => state.animes);

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={10} text="center">
        <Grid container justify="center">
          <Grid item xs={11}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <h2 className={classes.title}>All animes</h2>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.search}>
                <SearchInput />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={4} className={classes.margin}>
            {animes.map((anime) => (
              <Box key={anime._id} arg={anime} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
