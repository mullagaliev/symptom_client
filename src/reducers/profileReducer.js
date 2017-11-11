import * as ACTION_TYPES from  '../constants/actionsTypes';
import Cookies from 'cookies-js';
import REQUEST_STATUSES from '../constants/requestStatuses';

const isAuth = Number(Cookies.get('isAuth'));

const defaultState = {
  statistics: []
};

function profileReducer(state = defaultState, action) {
  const {type} = action;

  switch (type) {
    /* GET DATA */
    // case ACTION_TYPES.LOGIN_FETCH_REQUESTED:
    //   return Object.assign({}, state, {
    //     requestStatus: REQUEST_STATUSES.REQUESTED
    //   });
    // case ACTION_TYPES.LOGIN_FETCH_SUCCEEDED:
    //   return {
    //     isAuth: 1,
    //     email: action.email,
    //     lastError: null,
    //     requestStatus: REQUEST_STATUSES.SUCCEEDED
    //   };
    // case ACTION_TYPES.LOGIN_FETCH_FAILED:
    //   return {
    //     isAuth: 0,
    //     email: null,
    //     lastError: action.message,
    //     requestStatus: REQUEST_STATUSES.FAILED
    //   };
    default:
      return state;
  }
}

export default profileReducer;
