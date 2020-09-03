// TODO: implement
import {
  GETMESSAGELIST_START,
  GETMESSAGELIST_SUCCESS,
  GETMESSAGELIST_FAILOR,
  GET_MESSAGE,
  GET_MESSAGE_FAILURE,
  GET_MESSAGE_SUCCESS,
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  DELETE_MESSAGE,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  list: [],
  messageId: "",
  text: "",
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
        messageId: action.payload,
        loading: true,
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messageId: action.payload.messagesId,
        loading: false,
      };
    case GET_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_MESSAGE:
      return {
        ...state,
        text: action.payload,
        loading: true,
      };
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        text: action.payload.text,
        loading: false,
      };
    case CREATE_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messageId: action.payload,
        loading: true,
      };
    case DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload.messageId,
        loading: false,
      };
    case DELETE_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
