
import {POST_MODULE_INIT_SUCCESS , POST_FETCH_ERROR } from './actions'

// The initial state of the Login Reducer
export const initialState = {
     post : [],
     postCount : 0
  };

export default function(state = initialState,actions){

    switch(actions.type){
            case POST_MODULE_INIT_SUCCESS:
              return { ...initialState , post : actions.post , postCount : actions.totalCount } 
            case POST_FETCH_ERROR:
                return { ...initialState , error : actions.error }      
            default:
             return state;
    }
}