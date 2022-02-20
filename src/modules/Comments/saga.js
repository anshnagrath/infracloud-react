import { put, all, call, takeLatest  } from "redux-saga/effects";

import request from '../../helpers/requests';
import { COMENTS_MODULE_INIT , COMENTS_PAGE_CHANGE } from "./actions";
import {comentModuleSuccess} from "./actions";

import { API_METHOD, API_URLS } from "../../config/apiUrl";

//Post API call
function getAllComent(payload) {
   
  return   request(API_METHOD.GET, `${API_URLS.baseurl}${API_URLS.comment.getAllComments}`, payload, null, null);
}



// Post Worker
function* commentWorkerInit( payload ) {
  try {

    let payloadObj =  {'_start': payload.pageNumber || 0 , '_limit': payload.limit || 10 , postId : payload.id  }
    let totalPostCount = yield call(getAllComent,{ postId : payload.id  });
    let response = yield call(getAllComent, payloadObj);
    response['Coment_Count'] = totalPostCount.data.length;
    if(response && response.data && response.data.length > 0) yield put(comentModuleSuccess(response));
    // 
  } catch (err) {
    console.log('Error Occured' ,err);

  }
}





// POST Watcher
export default function* postSaga() {
  yield all([ 
    takeLatest(COMENTS_MODULE_INIT, commentWorkerInit),
    takeLatest(COMENTS_PAGE_CHANGE, commentWorkerInit),
 
  ]);
}