import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles"
import CancelIcon from "@material-ui/icons/Cancel"
import { Avatar, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

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
        {["Animes", "Characters"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
      <AppBar style={{backgroundColor: "#55cbb3"}}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            qAnime
          </Typography>
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
