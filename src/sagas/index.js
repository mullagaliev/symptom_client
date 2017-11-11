import {put, call, takeLatest} from 'redux-saga/effects'
import * as Api from '../services';
import * as ACTION_TYPES from '../constants/actionsTypes';
import pause from '../helpers/saga/pause';
import REQUEST_STATUSES from '../constants/requestStatuses';


function* fetchLoginAdmin(action) {
  try {
    const {email} = action;
    const response = yield call(Api.loginAdmin, email, action.fields.password);
    yield call(pause);
    yield put({type: ACTION_TYPES.LOGIN_FETCH_SUCCEEDED, user: response});
  } catch (e) {
    yield put({type: ACTION_TYPES.LOGIN_FETCH_FAILED, message: e.message});
  }
}

function* fetchLogoutAdmin(action) {
  try {
    const response = yield call(Api.logoutAdmin, {});
    yield put({type: ACTION_TYPES.LOGOUT_FETCH_SUCCEEDED, user: response});
  } catch (e) {
    yield put({type: ACTION_TYPES.LOGOUT_FETCH_FAILED, message: e.message});
  }
}

function* fetchSendPhoto(action) {
  try {
    const {photo} = action.fields;
    const response = yield call(Api.sendPhoto, photo);
    yield put({type: ACTION_TYPES.SEND_PHOTO_FETCH_SUCCEEDED, result: response});
  } catch (e) {
    yield put({type: ACTION_TYPES.SEND_PHOTO_FETCH_FAILED, message: e.message});
  }
}

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN_FETCH_REQUESTED, fetchLoginAdmin);
  yield takeLatest(ACTION_TYPES.LOGOUT_FETCH_REQUESTED, fetchLogoutAdmin);
  yield takeLatest(ACTION_TYPES.SEND_PHOTO_FETCH_REQUESTED, fetchSendPhoto);
}

export default rootSaga;