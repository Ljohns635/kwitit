import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { usersReducer } from "./users";
import { messageReducer } from "./messages";
import { googleReducer } from "./googleauth";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  messages: messageReducer,
  googleauth: googleReducer,
});
