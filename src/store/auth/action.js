export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const logIn = payload => ({
  type: LOGIN,
  payload,
});

export const logOut = () => ({
  type: LOGOUT,
});
