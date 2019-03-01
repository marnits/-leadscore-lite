import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { FETCH_CONTACTS_REQUEST } from '../../constants/actionTypes';
import { FETCH_CONTACTS_URL } from '../../constants/urls';
import { fetchContactsSuccess } from '../../actions/contacts';
import mapContact from '../../utils/methods/mapContact';
import generateUrl from '../../utils/methods/generateUrl';

export default (action$, state$, { ajax }) => action$.pipe(
  ofType(FETCH_CONTACTS_REQUEST),
  withLatestFrom(state$),
  mergeMap(([, { authentication, contacts }]) => {
    const { offset, limit } = contacts;
    const { authToken } = authentication;

    return ajax({
      url: generateUrl(FETCH_CONTACTS_URL, { offset, limit }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authToken,
      },
      body: JSON.stringify({}),
    }).pipe(
      map(({ response: { data, count } }) => fetchContactsSuccess(data.map(mapContact), count)),
    );
  }),
);
