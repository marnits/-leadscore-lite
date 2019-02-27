import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { SIGN_IN_REQUEST } from '../../constants/actionTypes';
import { SIGN_IN_URL } from '../../constants/urls';
import { signInSuccess } from '../../actions/authentication';

export default (action$, state$, { ajax }) => action$.pipe(
  ofType(SIGN_IN_REQUEST),
  mergeMap(({ payload: { username, password } }) => (
    ajax({
      url: SIGN_IN_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).pipe(
      map(({ response: { token } }) => (
        signInSuccess(token)
      )),
    )
  )),
);
