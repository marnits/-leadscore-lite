import { ActionsObservable } from 'redux-observable';

import {
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from '../../../constants/actionTypes';
import signOut from '../signOut';

describe('signOut epic', () => {
  test('should get SIGN_OUT_SUCCESS action', (done) => {
    const ajax = () => ActionsObservable.of(null);

    const action$ = ActionsObservable.of({
      type: SIGN_OUT_REQUEST,
    });

    const expectedOutput = {
      type: SIGN_OUT_SUCCESS,
    };

    signOut(action$, {}, { ajax }).subscribe(
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
