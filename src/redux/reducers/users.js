import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
<<<<<<< HEAD
  USERLIST, 
  USERLIST_SUCCESS, 
=======
  USERLIST,
  USERLIST_SUCCESS,
>>>>>>> components
  USERLIST_FAILURE,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  userList: {},
  isAuthenticated: "",
  username: "",
  displayName: "",
  loading: false,
  error: "",
};

export const usersReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case REGISTER_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        // displayName,
        loading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...INITIAL_STATE,
        username: action.payload,
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        username: action.payload.username,
        loading: false,
      };
    case DELETE_USER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...INITIAL_STATE,
        username: action.payload,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        username: action.payload.username,
        loading: false,
      };
    case GET_USER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
<<<<<<< HEAD
      case USERLIST:
        return {
          ...INITIAL_STATE,
          loading: true,
        };  
        case USERLIST_SUCCESS:      
      return {
        ...INITIAL_STATE,
        USERLIST: action.payload,        
        loading: false,
      }; 
      case USERLIST_FAILURE:
=======
    case USERLIST:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case USERLIST_SUCCESS:
      return {
        ...INITIAL_STATE,
        USERLIST: action.payload,
        loading: false,
      };
    case USERLIST_FAILURE:
>>>>>>> components
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
<<<<<<< HEAD
      };   
=======
      };
>>>>>>> components

    default:
      return state;
  }
};
