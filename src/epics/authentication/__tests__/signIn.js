import { ActionsObservable } from 'redux-observable';
import { throwError } from 'rxjs';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
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
        authToken: 'token',
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

  test('should get ERROR from signIn', (done) => {
    const ajax = () => throwError({ status: 401 });

    const action$ = ActionsObservable.of({
      type: SIGN_IN_REQUEST,
      payload: {
        username: 'login',
        password: 'pass',
      },
    });

    const outputActions = [];
    signIn(action$, {}, { ajax }).subscribe(
      actualOutputActions => outputActions.push(actualOutputActions),
      (error) => {
        expect(error).toBeUndefined();
        done();
      },
      () => {
        expect(outputActions).toEqual([{
          type: SIGN_IN_ERROR,
        }]);
        done();
      },
    );
  });
});
