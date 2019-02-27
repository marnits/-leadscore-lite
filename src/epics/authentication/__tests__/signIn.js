import { ActionsObservable } from 'redux-observable';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from '../../../constants/actionTypes';
import signIn from '../signIn';

describe('signIn epic', () => {
  test('should get SIGN_IN_SUCCESS action', (done) => {
    const response = {
      response: {
        token: {
          authToken: 'token',
        },
      },
    };

    const ajax = () => ActionsObservable.of(response);

    const action$ = ActionsObservable.of({
      type: SIGN_IN_REQUEST,
      payload: {
        username: 'user',
        password: 'password',
      },
    });

    const expectedOutput = {
      type: SIGN_IN_SUCCESS,
      payload: {
        token: {
          authToken: 'token',
        },
      },
    };

    signIn(action$, {}, { ajax }).subscribe(
      (outputAction) => {
        expect(outputAction).toEqual(expectedOutput);
        done();
      },
      (error) => {
        expect(error).toBeUndefined();
        done();
      },
    );
  });
});
