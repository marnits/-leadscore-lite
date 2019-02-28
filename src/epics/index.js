import { ajax } from 'rxjs/ajax';
import { combineEpics } from 'redux-observable';

import signIn from './authentication/signIn';
import signOut from './authentication/signOut';

import fetchContacts from './contacts/fetchContacts';

export default (...args) => combineEpics(
  signIn,
  signOut,
  fetchContacts,
)(...args, { ajax });
