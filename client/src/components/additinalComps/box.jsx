import React from "react";
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "white",
        height: 200,
        width: 150,
        color: '#ffffff',
        margin: "auto",
        textShadow: "2px 2px 2px #011e20",
        cursor: "pointer",
        position: "relative",
        filter: "grayscale(0.5)",
        transition: "transform 0.3s ease-out",
        '&:hover': {
          filter: "grayscale(0)",
          transform: "scale(1.1)"
        }
    },
    image: {
        height: 200,
        width: 150,
    },
    name: {
      position: "absolute",
      bottom: 0,
      textAlign: "center",
      width: "100%",
      backgroundColor: "#55cbb3",
      textOverflow: "ellipsis",
      fontWeight: 500,
      fontSize: 16,
      padding: "4px 0"
    },
    rating: {
      position: "absolute",
      left: 0,
      top: 0,
      backgroundColor: "#55cbb3",
      padding: "0 10px",
      textAlign: "center"
    }
}))
 
export default function Box({arg}) {
  const classes = useStyles()
  return (
    <Grid xs={6} sm={4} md={3} lg={2} item>
      <Link to="/">
        <div className={classes.paper}>
          <img className={classes.image} src={arg.img} alt="img"/>
          <h3 className={classes.name}>{arg.name}</h3>
          <p className={classes.rating}>0</p>
        </div>
      </Link>
    </Grid>
  );
}
