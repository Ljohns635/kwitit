import api from "../../utils/api";

// unlike CONSTANTS
export const USERLIST = "USERLIST/USERLIST";
export const USERLIST_SUCCESS = "USERLIST/USERLIST_SUCCESS";
export const USERLIST_FAILURE = "USERLIST/USERLIST_FAILURE";



export const userlist = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USERLIST });
    const payload = await api.unlike();
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })

    dispatch({ type: USERLIST_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: USERLIST_FAILURE,
      payload: err.message,
    });
  }
};