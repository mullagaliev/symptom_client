import * as ACTION_TYPES from '../constants/actionsTypes';

export default function action(type, fields = []) {
  return {type, ...fields};
}

export const authLogin = (email, fields = []) => action(ACTION_TYPES.LOGIN_FETCH_REQUESTED, {email, fields});
export const authLogout = () => action(ACTION_TYPES.LOGOUT_FETCH_REQUESTED, {});

export const sendPhoto = (photo) => action(ACTION_TYPES.SEND_PHOTO_FETCH_REQUESTED, {photo});
