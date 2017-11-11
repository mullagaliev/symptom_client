import * as ACTION_TYPES from  '../constants/actionsTypes';
import Cookies from 'cookies-js';
import REQUEST_STATUSES from '../constants/requestStatuses';

const isAuth = Number(Cookies.get('isAuth'));

const defaultState = {
  isAuth: isAuth === 1,
  email: null,
  lastError: null,
  requestStatus: REQUEST_STATUSES.NONE
};

function authReducer(state = defaultState, action) {
  const {type} = action;

  switch (type) {
    /* LOGIN */
    case ACTION_TYPES.LOGIN_FETCH_REQUESTED:
      return Object.assign({}, state, {
        requestStatus: REQUEST_STATUSES.REQUESTED
      });
    case ACTION_TYPES.LOGIN_FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        isAuth: 1,
        email: action.email,
        requestStatus: REQUEST_STATUSES.SUCCEEDED
      });
    case ACTION_TYPES.LOGIN_FETCH_FAILED:
      return Object.assign({}, state, {
        lastError: action.message,
        requestStatus: REQUEST_STATUSES.FAILED
      });
    /* LOGOUT */
    case ACTION_TYPES.LOGOUT_FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        isAuth: 0,
        email: null,
      });
    case ACTION_TYPES.LOGOUT_FETCH_FAILED:
      return Object.assign({}, state, {
        isAuth: 0,
        email: null
      });
    default:
      return state;
  }
}

export default authReducer;
