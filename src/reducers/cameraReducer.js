import * as ACTION_TYPES from  '../constants/actionsTypes';
import Cookies from 'cookies-js';
import REQUEST_STATUSES from '../constants/requestStatuses';

const defaultState = {
  requestStatus: REQUEST_STATUSES.NONE
};

function profileReducer(state = defaultState, action) {
  const {type} = action;

  switch (type) {
    /* GET DATA */
    case ACTION_TYPES.SEND_PHOTO_FETCH_REQUESTED:
      return Object.assign({}, state, {
        requestStatus: REQUEST_STATUSES.REQUESTED
      });
    case ACTION_TYPES.SEND_PHOTO_FETCH_SUCCEEDED:
      return {
        requestStatus: REQUEST_STATUSES.SUCCEEDED
      };
    case ACTION_TYPES.SEND_PHOTO_FETCH_FAILED:
      return {
        requestStatus: REQUEST_STATUSES.FAILED
      };
    default:
      return state;
  }
}

export default profileReducer;
