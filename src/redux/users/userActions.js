import { createAction } from "@reduxjs/toolkit";

const registRequest = createAction("user/registRequest");
const registSuccess = createAction("user/registSuccess");
const registError = createAction("user/registError");

const loginUserRequest = createAction("user/loginRequest");
const loginUserSuccess = createAction("user/loginSuccess");
const loginUserError = createAction("user/loginError");

const logoutUserRequest = createAction("user/logoutRequest");
const logoutUserSuccess = createAction("user/logoutSuccess");
const logoutUserError = createAction("user/logoutError");

const getCurretUserRequest = createAction("user/getCurretUserRequest");
const getCurretUserSuccess = createAction("user/getCurretUserSuccess");
const getCurretUserError = createAction("user/getCurretUserError");

const registrationActions = {
  registRequest,
  registSuccess,
  registError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  getCurretUserRequest,
  getCurretUserSuccess,
  getCurretUserError,
};
export default registrationActions;
