import api from "../../utils/api";

// likes CONSTANTS
export const LIKE = "LIKE/LIKE";
export const LIKE_SUCCESS = "LIKES/LIKE_SUCCESS";
export const LIKE_FAILURE = "LIKES/LIKE_FAILURE";



export const like = ({messageId}) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKE });
    const payload = await api.likes({messageId});
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })

    dispatch({ type: LIKE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LIKE_FAILURE,
      payload: err.message,
    });
  }
};