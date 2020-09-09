import api from "../../utils/api";

import { getMessageList } from "../actions/messageList";

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";
export const CREATE_MESSAGE_FAILURE = "CREATE_MESSAGE_FAILURE";

export const createMessage = (text) => async (dispatch) => {
  console.log(text);
  try {
    dispatch({ type: CREATE_MESSAGE });
    const payload = await api.createMessages(text);
    console.log(payload);
    dispatch({ type: CREATE_MESSAGE_SUCCESS, payload });
    dispatch(getMessageList());
  } catch (err) {
    dispatch({ type: CREATE_MESSAGE_FAILURE, err });
  }
};
