import api from "../../utils/api";

// likes CONSTANTS
export const LIKE = "LIKE/LIKE";
export const LIKE_SUCCESS = "LIKE/LIKE_SUCCESS";
export const LIKE_FAILURE = "LIKE/LIKE_FAILURE";

// Akil received help from Gabby

export const like = ({messageId}) => async (dispatch, getState) => {
  try {
    // dispatch({ type: LIKE });
    // const payload = await api.likes({messageId});
    const username = getState().state.auth.username
    const messages = getState().messages.messages
    const messageThatIsClicked = messages.find(message => message.id === messageId) 
    const isLiked = messageThatIsClicked.likes.find(like => like.username === username)
    const payload = isLiked ? await api.unLikes(isLiked.id) : await api.like(messageId) 
    // const messageResponse = await api.getMessages.map(messages => message.id === messageID)
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    console.log(messageThatIsClicked)

    dispatch({ type: LIKE_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({
      type: LIKE_FAILURE,
      payload: err.message,
    });
  }
};
