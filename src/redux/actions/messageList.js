import api from "../../utils/api";

export const GETMESSAGELIST_START = "GETMESSAGELIST_START";
export const GETMESSAGELIST_SUCCESS = "GETMESSAGELIST_SUCCESS";
export const GETMESSAGELIST_FAILOR = "GETMESSAGELIST_FAILOR";

export const getMessageList = (messageId) => async (dispatch, getstate) => {
  console.log(messageId);
  try {
    dispatch({ type: GETMESSAGELIST_START });
    const payload = await api.getMessageList(messageId);
    dispatch({ type: GETMESSAGELIST_SUCCESS, payload });
    console.log(payload);
  } catch (err) {
    dispatch({ type: GETMESSAGELIST_FAILOR, err });
  }
};
