import api from "../../utils/api";

export const GETMESSAGELIST_START = "GETMESSAGELIST_START";
export const GETMESSAGELIST_SUCCESS = "GETMESSAGELIST_SUCCESS";
export const GETMESSAGELIST_FAILOR = "GETMESSAGELIST_FAILOR";

export const getMessageList = () => async (dispatch, getstate) => {
  try {
    dispatch({ type: GETMESSAGELIST_START });
    const payload = await api.getMessageList();
    dispatch({ type: GETMESSAGELIST_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: GETMESSAGELIST_FAILOR, err });
  }
};
