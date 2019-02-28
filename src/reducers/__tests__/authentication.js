import reducer from '../authentication';
import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from '../../constants/actionTypes';

describe('authentication reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject({
      authToken: null,
    });
  });

  test('should handle SIGN_IN_SUCCESS', () => {
    expect(
      reducer({
        authToken: null,
      }, {
        type: SIGN_IN_SUCCESS,
        payload: {
          authToken: 'test',
        },
      }),
    ).toMatchObject({
      authToken: 'test',
    });
  });

  test('should handle SIGN_OUT_SUCCESS', () => {
    expect(
      reducer({
        authToken: 'test',
      }, {
        type: SIGN_OUT_SUCCESS,
      }),
    ).toMatchObject({
      authToken: null,
    });
  });
});
