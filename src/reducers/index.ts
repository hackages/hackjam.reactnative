import { combineReducers } from 'redux';
import auth from './auth';
import ui from './ui';
import fbReducer from './firebaseReducer';

const IndexReducer = combineReducers({
  auth,
  ui,
  fbReducer,
});

export default IndexReducer;
