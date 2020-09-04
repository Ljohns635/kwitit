// TODO: implement
import { LIKE, LIKE_SUCCESS, LIKE_FAILURE, UNLIKE, UNLIKE_SUCCESS, UNLIKE_FAILURE } from "../actions";

const INITIAL_STATE = {
    like: {},
    unlike: {},
    loading: false,
    error: "",
  };
  
  export const authReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case LIKE:
        return {
          ...INITIAL_STATE,
          loading: true,
        };  
        case LIKE_SUCCESS:      
      return {
        ...INITIAL_STATE,
        like: action.payload,        
        loading: false,
      }; 
      case LIKE_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
      case UNLIKE:
        return {
          ...INITIAL_STATE,
          loading: true,
        };  
        case UNLIKE_SUCCESS:      
      return {
        ...INITIAL_STATE,
        unlike: action.payload,        
        loading: false,
      }; 
      case UNLIKE_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };   
      default:
        return state;
    }
  };
