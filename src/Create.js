import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { FormControlLabel, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import notesOperation from "./redux/notes/notesOperation";
import Layout from "./components/Layout";

const useStyles = makeStyles({
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: "block",
  },
  btn: {
    marginBottom: 40,
  },
  card: {
    padding: 10,
  },
});

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("money");
  const classes = useStyles();
  const dispatch = useDispatch();

  const onAddNote = (e) => {
    e.preventDefault();
    const note = { title, details, category };
    if (!title && !details) {
      return;
    }
    dispatch(notesOperation.addNote(note));
    setTitle("");
    setDetails("");
  };
  return (
    <Layout>
      <Container>
        <form noValidate autoComplete="off" onSubmit={onAddNote}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            label="Title"
            value={title}
            fullWidth
            required
            className={classes.field}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            variant="outlined"
            label="Details"
            value={details}
            fullWidth
            multiline
            rows={4}
            required
            className={classes.field}
          />
          <FormControl className={classes.field}>
            <FormLabel>Notes category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Money"
              />
              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="Todos"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="Reminders"
              />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.btn}
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Layout>
  );
};

export default Create;
