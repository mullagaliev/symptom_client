import authReducer from './authReducer';
import profileReducer from './profileReducer';
import cameraReducer from './cameraReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  user: authReducer,
  profile: profileReducer,
  camera: cameraReducer
});

export default rootReducer;
