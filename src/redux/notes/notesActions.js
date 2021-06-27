import { createAction } from "@reduxjs/toolkit";

const addNoteRequest = createAction("add/request");
const addNoteSuccess = createAction("add/success");
const addNoteError = createAction("add/error");
const currentNotes = createAction("current/success");
const deleteNoteRequest = createAction("delete/request");
const deleteNoteSuccess = createAction("delete/success");
const deleteNoteError = createAction("delete/error");

const notesActions = {
  addNoteRequest,
  addNoteSuccess,
  addNoteError,
  currentNotes,
  deleteNoteRequest,
  deleteNoteSuccess,
  deleteNoteError,
};

export default notesActions;
