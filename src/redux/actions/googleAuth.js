import api from "../../utils/api";

// AUTH CONSTANTS
export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const GOOGLE_LOGIN_SUCCESS = "GOOGLE_LOGIN_SUCCESS";
export const GOOGLE_LOGIN_FAILURE = "GOOGLE_LOGIN_FAILURE";
export const GOOGLE_LOGOUT = "GOOGLE_LOGOUT";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
// export const logingoogle = () => async (dispatch, getState) => {
//   try {
//     dispatch({ type: GOOGLE_LOGIN });
//     const payload = await api.googlelogin();
   

//     dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload });
//   } catch (err) {
//     dispatch({
//       type: GOOGLE_LOGIN_FAILURE,
//       payload: err.message,
//     });
//   }
// };

export const logingoogle = (data) => {
  return {
    type: GOOGLE_LOGIN_SUCCESS,
    payload: data,
  }
} 

// export const googleaction = {
//   logingoogle,
// };
