import React from "react";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core";
import { SubjectOutlined, AddCircleOutlineOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import { format } from "date-fns";
import userOperations from "../redux/users/userOperations";
import { useDispatch } from "react-redux";
import Clock from "./Clock";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      // background: "linear-gradient(to right,  #89fffd,#ef32d9)",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drowerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
      fontFamily: "Dancing Script",
      fontSize: "34px",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
      fontSize: 20,
    },
    btn: {
      fontSize: 20,
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(userOperations.logout());
  };
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="primary" />,
      path: "/notes",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            <Clock className={classes.clock} />
            <br />
            {format(new Date(), "do MMMM Y ")}
          </Typography>
          <Button
            color="inherit"
            endIcon={<ExitToAppIcon />}
            onClick={onLogout}
            className={classes.btn}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drowerPaper }}
      >
        <div>
          <Typography variant="h6" className={classes.title} color="primary">
            Notes App
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
