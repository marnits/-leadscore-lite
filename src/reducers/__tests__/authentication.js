import reducer from '../authentication';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
} from '../../constants/actionTypes';

describe('authentication reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject({
      authToken: null,
      error: false,
    });
  });

  test('should handle SIGN_IN_REQUEST', () => {
    expect(
      reducer({
        error: true,
        authToken: null,
      }, {
        type: SIGN_IN_REQUEST,
      }),
    ).toMatchObject({
      authToken: null,
      error: false,
    });
  });

  test('should handle SIGN_IN_SUCCESS', () => {
    expect(
      reducer({
        authToken: null,
        error: false,
      }, {
        type: SIGN_IN_SUCCESS,
        payload: {
          authToken: 'test',
        },
      }),
    ).toMatchObject({
      authToken: 'test',
      error: false,
    });
  });

  test('should handle SIGN_IN_ERROR', () => {
    expect(
      reducer({
        authToken: null,
        error: false,
      }, {
        type: SIGN_IN_ERROR,
      }),
    ).toMatchObject({
      authToken: null,
      error: true,
    });
  });

  test('should handle SIGN_OUT_SUCCESS', () => {
    expect(
      reducer({
        authToken: 'test',
        error: false,
      }, {
        type: SIGN_OUT_SUCCESS,
      }),
    ).toMatchObject({
      authToken: null,
      error: false,
    });
  });
});
