import { catchError, mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { SIGN_OUT_REQUEST } from '../../constants/actionTypes';
import { SIGN_OUT_URL } from '../../constants/urls';
import { signOutSuccess } from '../../actions/authentication';

export default (action$, state$, { ajax }) => action$.pipe(
  ofType(SIGN_OUT_REQUEST),
  mergeMap(() => (
    ajax({
      url: SIGN_OUT_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).pipe(
      map(signOutSuccess),
      catchError(() => {}),
    )
  )),
);
