import api from "../../utils/api";
import { getMessageList } from "../actions/messageList";

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteuser = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_USER });
    let username = getState().auth.username;
    const payload = await api.deleteUser(username);
    dispatch({ type: DELETE_USER, payload });
    dispatch(getMessageList());
  } catch (err) {
    dispatch({ type: DELETE_USER_FAILURE, err });
  }
};
