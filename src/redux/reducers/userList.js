import { USERLIST, USERLIST_SUCCESS, USERLIST_FAILURE } from "../actions";

const INITIAL_STATE = {
    unlike: {},
    loading: false,
    error: "",
  };
  
  export const authReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
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
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };   
      default:
        return state;
    }
  };