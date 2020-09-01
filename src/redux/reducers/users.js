import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: "",
  username: "",
  displayName: "",
  loading: false,
  error: "",
};

export const usersReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case REGISTER_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        // displayName,
        loading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
