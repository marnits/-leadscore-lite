import { combineReducers } from 'redux';
import authentication from './authentication';
import contacts from './contacts';

export default combineReducers({
  authentication,
  contacts,
});
