
import {COMENTS_MODULE_INIT_SUCCESS} from './actions'

// The initial state of the Login Reducer
export const initialState = {
     comments : [],
     comentCount : 0
  };

export default function(state = initialState,actions){

    switch(actions.type){
            case COMENTS_MODULE_INIT_SUCCESS:
              return { ...initialState , comments : actions.comments , comentCount : actions.commentCount }      
            default:
             return state;
    }
}