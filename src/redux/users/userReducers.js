import { createReducer, combineReducers } from "@reduxjs/toolkit";
import registrationActions from "./userActions";

const initialUserState = { id: null, name: null, email: null, notes: [] };

const user = createReducer(initialUserState, {
  [registrationActions.registSuccess]: (state, action) => action.payload.user,
  [registrationActions.loginUserSuccess]: (state, action) =>
    action.payload.user,
  [registrationActions.getCurretUserSuccess]: (state, action) => action.payload,
  [registrationActions.logoutUserSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [registrationActions.registSuccess]: (state, action) => action.payload.token,
  [registrationActions.loginUserSuccess]: (state, action) =>
    action.payload.token,
  [registrationActions.logoutUserSuccess]: () => null,
});

const error = createReducer(null, {
  [registrationActions.registError]: (state, action) => action.payload,
  [registrationActions.loginUserError]: (state, action) => action.payload,
  [registrationActions.getCurretUserError]: (state, action) => action.payload,
  [registrationActions.logoutUserError]: (state, action) => action.payload,
});

const registrationReducer = {
  user,
  token,
  error,
};

export default combineReducers(registrationReducer);
