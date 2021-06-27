import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { items } from "./redux/users/userSelector";
import notesOperation from "./redux/notes/notesOperation";
import NoteCard from "./components/NoteCard";
import Container from "@material-ui/core/Container";
import Layout from "./components/Layout";
import userOperations from "./redux/users/userOperations";

const Notes = () => {
  const notes = useSelector(items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, [notes, dispatch]);

  const handleDelete = (id) => {
    dispatch(notesOperation.deleteNote(id));
  };

  return (
    <Layout>
      <Container>
        <Grid container spacing={3}>
          {notes &&
            notes.map((note) => (
              <Grid item xs={12} sm={12} lg={4} key={note._id}>
                <NoteCard note={note} onDelete={handleDelete} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Notes;
