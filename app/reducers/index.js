import { combineReducers } from 'redux';
import user from './userReducer';
import photo from './photoReducer';

const rootReducer = combineReducers({
  user,
  photo
});

export default rootReducer;
