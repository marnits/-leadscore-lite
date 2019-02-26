import { ajax } from 'rxjs/ajax';
import { combineEpics } from 'redux-observable';

import signIn from './authentication/signIn';
import signOut from './authentication/signOut';

export default (...args) => combineEpics(
  signIn,
  signOut,
)(...args, { ajax });
