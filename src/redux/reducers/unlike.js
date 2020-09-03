import { UNLIKE, UNLIKE_SUCCESS, UNLIKE_FAILURE } from "../actions";

const INITIAL_STATE = {
    unlike: {},
    loading: false,
    error: "",
  };
  
  export const authReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
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