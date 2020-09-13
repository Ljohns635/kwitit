export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const GOOGLE_LOGIN_SUCCESS = "GOOGLE_LOGIN_SUCCESS";
export const GOOGLE_LOGIN_FAILURE = "GOOGLE_LOGIN_FAILURE";
export const GOOGLE_LOGOUT = "GOOGLE_LOGOUT";



export const logingoogle = (data) => {
  return {
    type: GOOGLE_LOGIN_SUCCESS,
    payload: data,
  }
} 


