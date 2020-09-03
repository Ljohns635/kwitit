import api from "../../utils/api";

export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAILURE = "DELETE_MESSAGE_FAILURE";

export const deleteMessages = ({ messageId }) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_MESSAGE });
    const payload = await api.deleteMessages({ messageId });
    dispatch({ type: DELETE_MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: DELETE_MESSAGE_FAILURE, err });
  }
};
