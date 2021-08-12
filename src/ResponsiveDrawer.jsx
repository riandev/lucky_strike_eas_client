import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "./images/fifo-iso-logo-2.png";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import user from "./images/user.png";

import routes from "./Router/routes";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import { consumerContext } from "./App";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ResponsiveDrawer = (props) => {
  const [consumer, setConsumer] = useContext(consumerContext);
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    <Redirect to="/login" />;
    sessionStorage.removeItem("agent");
    window.location.reload(true);
  };
  const handleReload = () => {
    window.location.reload(true);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <img
        style={{ cursor: "pointer" }}
        onClick={handleReload}
        src={logo}
        alt="Logo"
      />
      <Divider />
      <List>
        {routes.map((route) => (
          <Link to={route.path}>
            <ListItem button key={route.name}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <div
        style={{ display: consumer === null ? "none" : "block" }}
        className="mt-2"
      >
        <p className="ml-1 font-weight-bold">Name: {consumer?.r_name}</p>
        <p className="ml-1 font-weight-bold">Mobile: {consumer?.Consumer_No}</p>
        <p className="ml-1 font-weight-bold">Region: {consumer?.Region}</p>
        <p className="ml-1 font-weight-bold">Area: {consumer?.Area}</p>
        <p className="ml-1 font-weight-bold">
          Territory: {consumer?.Territory}
        </p>
        <p className="ml-1 font-weight-bold">Age: {consumer?.Age}</p>
        <p className="ml-1 font-weight-bold">
          Occupation: {consumer?.EASOccupation}
        </p>
      </div>
    </div>
  );

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className="d-flex justify-content-between">
            <div>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.toolbar}
                  />
                ))}
              </Typography>
            </div>
            <div>
              <p>Agent ID: {sessionStorage.getItem("agent")}</p>
            </div>
            <div>
              <Button
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <Avatar src={user} />
              </Button>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </main>
      </div>
    </Router>
  );
};

ResponsiveDrawer.propTypes = {
  container: PropTypes.object,
};

export default ResponsiveDrawer;
