import api from "../../utils/api";

export const GET_MESSAGE = "GET_MESSAGE";
export const GET_MESSAGE_SUCCESS = "GET_MESSAGE_SUCCESS";
export const GET_MESSAGE_FAILURE = "GET_MESSAGE_FAILURE";

export const getMessage = (messageId) => async (dispatch) => {
  // console.log(messageId);
  try {
    dispatch({ type: GET_MESSAGE });
    const payload = await api.getMessages(messageId);
    // console.log(payload);
    dispatch({ type: GET_MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: GET_MESSAGE_FAILURE, err });
  }
};
