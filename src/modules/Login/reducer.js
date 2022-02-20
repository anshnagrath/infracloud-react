
import { LOGIN_USER_NAME } from './actions'

// The initial state of the Login Reducer
export const initialState = {
     name : ''
  };

export default function(state = initialState,actions){

    switch(actions.type){
        case LOGIN_USER_NAME:
             return { ...state , name : actions.name };
            default:
             return state;
    }
}