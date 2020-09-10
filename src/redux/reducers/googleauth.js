import {
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGOUT,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: "",
  loading: false,
  error: "Google Id Credential incorrect",
};

export const googleReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case GOOGLE_LOGIN_SUCCESS:
      const { token } = action.payload;
      return {
        ...state,
        isAuthenticated: token,
        loading: false,
      };
    case GOOGLE_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GOOGLE_LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
