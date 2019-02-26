import reducer from '../authentication';
import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from '../../constants/actionTypes';

describe('authentication reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject({
      token: null,
    });
  });

  test('should handle SIGN_IN_SUCCESS', () => {
    expect(
      reducer({
        token: null,
      }, {
        type: SIGN_IN_SUCCESS,
        payload: {
          token: 'test',
        },
      }),
    ).toMatchObject({
      token: 'test',
    });
  });

  test('should handle SIGN_OUT_SUCCESS', () => {
    expect(
      reducer({
        token: 'test',
      }, {
        type: SIGN_OUT_SUCCESS,
      }),
    ).toMatchObject({
      token: null,
    });
  });
});
