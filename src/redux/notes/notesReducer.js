import notesActions from "./notesActions";
import { createReducer } from "@reduxjs/toolkit";

const notes = createReducer([], {
  [notesActions.addNoteSuccess]: (state, { payload }) => [...state, payload],
  [notesActions.currentNotes]: (state, { payload }) => payload,
  [notesActions.deleteNoteSuccess]: (state, { payload }) => {
    return state.filter((item) => {
      return item._id !== payload;
    });
  },
});

export default notes;
