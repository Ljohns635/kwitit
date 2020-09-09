import api from "../../utils/api";
import { actions } from "./auth";

// AUTH CONSTANTS
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// export const REG_LOGOUT = "REG_LOGOUT";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
const register = (credentials) => async (dispatch, getState) => {
  // console.log(credentials);
  try {
    dispatch({ type: REGISTER });
    const payload = await api.register(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log(payload);
    let loginCredentials = { ...credentials };
    delete loginCredentials.displayName;

    await dispatch({ type: REGISTER_SUCCESS, payload });
    dispatch(actions.login(loginCredentials));
  } catch (err) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: err.message,
    });
  }
};

// const regLogout = () => async (dispatch) => {
//   try {
//     // We do not care about the result of logging out
//     // as long as it succeeds
//     await api.regOut();
//   } finally {
//     /**
//      * Let the reducer know that we are logged out
//      */
//     dispatch({ type: REG_LOGOUT });
//   }
// };
// // END AUTH ACTIONS

export const regActions = {
  register,
  // regLogout,
};
