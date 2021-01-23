import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles"
import CancelIcon from "@material-ui/icons/Cancel"
import { Button, Grid, Avatar, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()
  const [state, setState] = React.useState({
    right: false,
  });

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const logout = () => {
    dispatch({type: "LOG_OUT"})
    setUser(null)
    history.push('/')
  }

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={toggleDrawer(anchor, false)}>
            <ListItemIcon>
              <CancelIcon style={{height: 40, width: 40}}/>
            </ListItemIcon>
            <ListItemText primary="Back" />
        </ListItem>
        <Link to="/login/">
        <ListItem button>
          <ListItemIcon>
            <Avatar src={user ? user.result.imageUrl : null}/>
          </ListItemIcon>
          <ListItemText primary={user ? user.result.name : "Login"} />
        </ListItem>
        </Link>
        {["Favourite Animes", "Favourite Characters"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["animes", "characters"].map((text) => (
          <Link to={`/${text}/`} key={text}>
            <ListItem button>
              <ListItemText primary={text} style={{textTransform: "capitalize"}}/>
            </ListItem>
          </Link>
        ))}
      </List>
      {user && <Grid container justify="center" className={classes.logout}>
        <Button color="secondary" variant='contained' onClick={logout}>
          Logout
      </Button>
        </Grid>}
    </div>
  );

  return (
      <AppBar style={{backgroundColor: "#55cbb3"}}>
        <Toolbar>
          <h2 className={classes.title}>
            <Link to="/">qAnime</Link>
          </h2>
          <React.Fragment>
            <IconButton onClick={toggleDrawer("right", true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </React.Fragment>
        </Toolbar>
      </AppBar>
  );
}
