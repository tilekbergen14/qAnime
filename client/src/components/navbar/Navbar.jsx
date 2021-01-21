import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles"
import CancelIcon from "@material-ui/icons/Cancel"
import { Avatar, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom"

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

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
        <ListItem button>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
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
