export const isAuthenticated = (state) => {
  return state.auth.token;
};
export const items = (state) => {
  //   console.log(state);
  return state.auth.user.notes;
};
