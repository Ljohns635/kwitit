import { GOOGLE_LOGIN, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE, GOOGLE_LOGOUT } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: "",  
  loading: false,
  error: "",
};

export const googleReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GOOGLE_LOGIN_SUCCESS:
      const { token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,       
        loading: false,
      };
    case GOOGLE_LOGIN_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case GOOGLE_LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};