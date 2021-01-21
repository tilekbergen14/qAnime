import React from 'react'
import AnimeList from "./AnimeList"
import CharacterList from "./CharacterList"
import { Grid, Button } from "@material-ui/core"
import SearchInput from "../additinalComps/SearchInput"
import useStyles from "./styles"
import { Link } from "react-router-dom"

export default function Admin() {
    const classes = useStyles()
    return (
        <div style={{color: "white", marginTop: 100, height: "100%"}}>
            <Grid container justify="center">
                <Grid item md={6} xs={11} className={classes.grid}>
                    <SearchInput />
                    <AnimeList />
                    <Grid container justify="flex-end"><Link to="/createanime"><Button variant="contained" color="primary" className={classes.btn}>Create New Anime</Button></Link></Grid>
                </Grid>
                <Grid item md={6} xs={11} className={classes.grid}>
                    <SearchInput />
                    <CharacterList />
                    <Grid container justify="flex-end"><Link to="/createcharacter/"><Button variant="contained" color="primary" className={classes.btn}>Create New Character</Button></Link></Grid>
                </Grid>
            </Grid>
        </div>
    )
}
