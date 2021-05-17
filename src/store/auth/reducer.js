import { LOGIN, LOGOUT } from './action';

const initialState = {
  isLogin: false,
  userEmail: null,
};

export const MODULE_NAME = 'auth';

export const selectIsLogin = state => state[MODULE_NAME].isLogin;

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        userEmail: payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        userEmail: null,
      };

    default:
      return state;
  }
};
