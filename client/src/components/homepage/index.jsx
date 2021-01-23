import React from "react";
import { Grid,} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import Box from "../additinalComps/box"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        marginTop: 60,
    },
    paper: {
        backgroundColor: "white",
        height: 200,
        width: 150,
        margin: "auto"
    },
    title: {
        margin: 20,
        textShadow: "2px 2px 4px #55cbb3"
    }, 
    border: {
        borderBottom: "2px solid #fff",
        padding: 20
    }
}))
 
export default function Index() {
  const classes = useStyles()
  const animes = useSelector(state => state.animes)
  const characters = useSelector(state => state.characters)
  
  return (
    <Grid container justify="center" className={classes.root}>
        <Grid item xs={10} text="center" className={classes.border}>
            <Grid container justify="center">
                <h2 className={classes.title}>Top Animes</h2>
                <Grid container spacing={4}>
                        {animes.map(anime => <Box key={anime._id} arg={anime} name="animes"/>)}
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={10} text="center">
            <Grid container justify="center">
                <h2 className={classes.title}>Top Characters</h2>
                <Grid container spacing={4}>
                        {characters.map(character => <Box key={character._id} arg={character} name="characters"/>)}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}
