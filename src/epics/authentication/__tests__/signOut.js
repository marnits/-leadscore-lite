import { Subject } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';

import {
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from '../../../constants/actionTypes';
import signOut from '../signOut';

const state = {
  authentication: {
    authToken: 'token!',
  },
};

describe('signOut epic', () => {
  test('should get SIGN_OUT_SUCCESS action', (done) => {
    const ajax = () => ActionsObservable.of(null);
    const stateInput$ = new Subject();
    const state$ = new StateObservable(stateInput$, state);

    const action$ = ActionsObservable.of({
      type: SIGN_OUT_REQUEST,
    });

    const expectedOutput = {
      type: SIGN_OUT_SUCCESS,
    };

    signOut(action$, state$, { ajax }).subscribe(
      (outputAction) => {
        expect(outputAction).toEqual(expectedOutput);
        done();
      },
    );
  });
});
