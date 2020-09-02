import api from "../../utils/api";

// AUTH CONSTANTS
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGOUT = "LOGOUT";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
const register = (credentials) => async (dispatch, getState) => {
  console.log(credentials);
  try {
    dispatch({ type: REGISTER });
    const payload = await api.register(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })

    dispatch({ type: REGISTER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: err.message,
    });
  }
};

const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
  }
};
// END AUTH ACTIONS

export const actions = {
  register,
  logout,
};
