import { createAction } from "@reduxjs/toolkit";

const addNoteRequest = createAction("add/request");
const addNoteSuccess = createAction("add/success");
const addNoteError = createAction("add/error");

const deleteNoteRequest = createAction("delete/request");
const deleteNoteSuccess = createAction("delete/success");
const deleteNoteError = createAction("delete/error");

const notesActions = {
  addNoteRequest,
  addNoteSuccess,
  addNoteError,

  deleteNoteRequest,
  deleteNoteSuccess,
  deleteNoteError,
};

export default notesActions;
