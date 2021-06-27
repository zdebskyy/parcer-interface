import React from "react";
import Notes from "./Notes";
import Login from "./Register";
import Register from "./Login";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Create from "./Create";

import { useSelector } from "react-redux";
import { isAuthenticated } from "./redux/users/userSelector";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { Redirect, Switch } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2f22b8",
    },
    secondary: blue,
  },
});

function App() {
  const isLoggedIn = useSelector(isAuthenticated);
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={Login}
          isAuthenticated={isLoggedIn}
          restricted={true}
        />
        <PublicRoute
          exact
          path="/login"
          component={Register}
          isAuthenticated={isLoggedIn}
          restricted={true}
        />

        <PrivateRoute
          exact
          path="/notes"
          component={Notes}
          isAuthenticated={isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/create"
          component={Create}
          isAuthenticated={isLoggedIn}
        />
        <Redirect to="/notes" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
