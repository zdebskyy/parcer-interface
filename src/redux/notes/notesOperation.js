import axios from "axios";
import notesActions from "./notesActions";

axios.defaults.baseURL = "http://localhost:3003/api/notes";

const addNote = (value) => (dispatch) => {
  dispatch(notesActions.addNoteRequest());
  axios
    .post("/notes/add", value)
    .then((res) => {
      // console.log(res.data);
      dispatch(notesActions.addNoteSuccess(res.data));
    })
    .catch((err) => dispatch(notesActions.addNoteError(err)));
};

const deleteNote = (id) => (dispatch) => {
  dispatch(notesActions.deleteNoteRequest());
  axios
    .delete(`/notes/remove/${id}`)
    .then((res) => {
      dispatch(notesActions.deleteNoteSuccess(id));
    })
    .catch((err) => dispatch(notesActions.deleteNoteError(err)));
};

const postOperations = {
  addNote,
  deleteNote,
};

export default postOperations;
