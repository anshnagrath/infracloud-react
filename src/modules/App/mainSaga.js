import { all } from "redux-saga/effects";
import postSaga from '../Post/saga';
import commentSags from '../Comments/saga';



export function* mainSaga() {
  yield all([
    postSaga(),
    commentSags()
  ]);
}