import { Subject } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';

import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';
import fetchContacts from '../fetchContacts';

const state = {
  authentication: {
    authToken: 'token!',
  },
  contacts: {
    offset: 0,
    limit: 25,
  },
};

describe('fetchContacts epic', () => {
  test('should get SIGN_OUT_SUCCESS action', (done) => {
    const ajax = () => ActionsObservable.of({
      response: {
        data: [{
          displayName: 'test',
          emails: [{ email: 'abc@xyz.com' }],
          phoneNumbers: [{ number: '1111' }],
        }],
        count: 50,
      },
    });

    const stateInput$ = new Subject();
    const state$ = new StateObservable(stateInput$, state);

    const action$ = ActionsObservable.of({
      type: FETCH_CONTACTS_REQUEST,
    });

    const expectedOutput = {
      type: FETCH_CONTACTS_SUCCESS,
      payload: {
        contacts: [
          {
            name: 'test',
            email: 'abc@xyz.com',
            phoneNumber: '1111',
          },
        ],
        total: 50,
      },
    };

    fetchContacts(action$, state$, { ajax }).subscribe(
      (outputAction) => {
        expect(outputAction).toEqual(expectedOutput);
        done();
      },
    );
  });
});
