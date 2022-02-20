import { put, all, call, takeLatest  } from "redux-saga/effects";

import request from '../../helpers/requests';
import {POST_MODULE_INIT , POST_PAGE_CHANGE} from "./actions";
import {postModuleSuccess , postError } from "./actions";
import { getFromSession } from '../../helpers/session';

import { API_METHOD, API_URLS } from "../../config/apiUrl";

//Post API call
function getAllPost(payload) {
   let headers = { name : getFromSession('name') }
  return   request(API_METHOD.GET, `${API_URLS.baseurl}${API_URLS.post.getAllPost}`, payload, null, headers);
}



// Post Worker
function* postWorkerInit( payload ) {
  try {

    let payloadObj =  {'_start': payload.pageNumber || 0 , '_limit': payload.limit || 10}
    let totalPostCount = yield call(getAllPost,{});
    let response = yield call(getAllPost, payloadObj);
    response['Post_Count'] = totalPostCount.data.length;
    if(response && response.data && response.data.length > 0) yield put(postModuleSuccess(response));
    else  yield postError({ message : 'No Data Found' });
    
  } catch (err) {
    console.log('Error Occured' ,err);
    yield postError(err)

  }
}





// POST Watcher
export default function* postSaga() {
  yield all([ 
    takeLatest(POST_MODULE_INIT, postWorkerInit),
    takeLatest(POST_PAGE_CHANGE, postWorkerInit),
 
  ]);
}