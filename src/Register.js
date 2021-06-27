import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import AuthLayout from "./components/AuthLayout";
import { Link } from "react-router-dom";
import userOperations from "./redux/users/userOperations";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: "block",
  },
  btn: {
    marginBottom: 20,
  },
  card: {
    padding: 10,
  },
  title: {
    textAlign: "center",
  },
  form: {
    display: "flex",
  },
});

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const onRegister = (e) => {
    e.preventDefault();
    const credentials = { name, email, password };
    if (!name && !email && !password) {
      return;
    }
    dispatch(userOperations.register(credentials));
    history.push("/login");
  };

  return (
    <AuthLayout>
      <Typography variant="h5" className={classes.title} color="primary">
        SIGN UP
      </Typography>
      <form noValidate autoComplete="off" onSubmit={onRegister}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          label="Name"
          value={name}
          fullWidth
          required
          className={classes.field}
          type="text"
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          label="Email"
          value={email}
          fullWidth
          required
          className={classes.field}
          type="email"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          label="Password"
          value={password}
          fullWidth
          required
          className={classes.field}
          type="password"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.btn}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
        <Typography>
          Already have account? Please <Link to="/login">sign in</Link>
        </Typography>
      </form>
    </AuthLayout>
  );
};

export default Register;
