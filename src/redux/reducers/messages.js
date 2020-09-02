// TODO: implement
import {
  GETMESSAGELIST_START,
  GETMESSAGELIST_SUCCESS,
  GETMESSAGELIST_FAILOR,
} from "../actions";

const INITIAL_STATE = {
  list: [],
  messageId: "",
  loading: false,
  error: "",
};
export const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETMESSAGELIST_START:
      return {
        ...state,
        loading: true,
      };
    case GETMESSAGELIST_SUCCESS:
      return {
        ...state,
        list: action.payload.messages,
        loading: false,
      };
    case GETMESSAGELIST_FAILOR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_MESSAGE:
      return {
        ...state,
        messageId,
        loading: true,
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messageId: action.payload.messagesId,
        loading: false,
      };
    default:
      return state;
  }
};
// this
