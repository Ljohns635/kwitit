import api from "../../utils/api";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const getuser = () => async (dispatch, getState) => {
  try {
    console.log("actionstarter");
    dispatch({ type: GET_USER });
    let username = getState().auth.username;
    const payload = await api.getUser(username);
    dispatch({ type: GET_USER_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: GET_USER_FAILURE, err });
  }
};
