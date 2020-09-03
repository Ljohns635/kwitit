import api from "../../utils/api";

// unlike CONSTANTS
export const UNLIKE = "UNLIKE/UNLIKE";
export const UNLIKE_SUCCESS = "UNLIKE/UNLIKE_SUCCESS";
export const UNLIKE_FAILURE = "UNLIKE/UNLIKE_FAILURE";



export const unlike = ({ likeId }) => async (dispatch, getState) => {
  try {
    dispatch({ type: UNLIKE });
    const payload = await api.unlike({ likeId });
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })

    dispatch({ type: UNLIKE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: UNLIKE_FAILURE,
      payload: err.message,
    });
  }
};