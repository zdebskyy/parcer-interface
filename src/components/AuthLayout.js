import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      width: 500,
      display: "block",
      padding: 20,
      background: "#fbfbfb",
      textAlign: "center",
    },
    root: {
      padding: theme.spacing(3),
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  };
});

const AuthLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>{children}</Paper>
    </div>
  );
};

export default AuthLayout;
