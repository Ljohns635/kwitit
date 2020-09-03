import api from "../../utils/api";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "DELETE_USER_FAILURE";

export const getuser = () => async (dispatch, getstate) => {
  try {
    dispatch({ type: GET_USER });
    const payload = await api.getUser(`${username}`);
    dispatch({ type: GET_USER_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: GET_USER_FAILURE, err });
  }
};
