import { combineReducers } from "redux";
import loginReducer from "../Login/reducer";
import postReducer from "../Post/reducer";
import commentReducer from '../Comments/reducer'

export const mainReducer = combineReducers({
   login: loginReducer,
   post : postReducer,
   comment : commentReducer
  
});
