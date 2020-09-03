import api from "../../utils/api";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteuser = () => async (dispatch, getstate) => {
  try {
    dispatch({ type: DELETE_USER });
    const payload = await api.deleteUser(`${username}`);
    dispatch({ type: DELETE_USER, payload });
  } catch (err) {
    dispatch({ type: DELETE_USER_FAILURE, err });
  }
};
