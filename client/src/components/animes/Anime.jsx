import React from 'react'
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"

const useStyles = makeStyles((theme) => ({
    container: {
        border: "2px solid white",
        margin: "80px auto"
    }
}))

export default function Anime() {
    const classes = useStyles()
    return (
        <Grid container className={classes.container}>
            <Grid item xs="6" sm="4">

            </Grid>
        </Grid>
    )
}
