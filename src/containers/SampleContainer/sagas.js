import { call, put, takeEvery } from 'redux-saga/effects';
import { SAMPLE_SAGA } from './constants';
import { sagaActionSuccess, sagaActionError } from './actions';
import API from './api';

function* fetchDataFlow(action) {
   try {
      const response = yield call(API.fetchData);

      if (response.data) {
        yield put(sagaActionSuccess(response.data));
      }
   } catch (e) {
     const message = (e.response && e.response.data.message) || 'Error!'
     yield put(sagaActionError(message));
   }
}

/*
  Starts fetchDataFlow on each dispatched `SAMPLE_SAGA` action.
  Allows concurrent fetches of user.
*/
function* mySagaWatcher() {
  yield takeEvery(SAMPLE_SAGA, fetchDataFlow);
}

export default mySagaWatcher;