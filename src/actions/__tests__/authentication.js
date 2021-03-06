import {
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
} from '../authentication';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from '../../constants/actionTypes';

describe('authentication actions', () => {
  test('should create SIGN_IN_REQUEST action', () => {
    const expectedAction = {
      type: SIGN_IN_REQUEST,
      payload: {
        username: 'user',
        password: 'password',
      },
    };

    expect(signInRequest('user', 'password'))
      .toMatchObject(expectedAction);
  });

  test('should create SIGN_IN_SUCCESS action', () => {
    const expectedAction = {
      type: SIGN_IN_SUCCESS,
      payload: {
        authToken: 'token',
      },
    };

    expect(signInSuccess('token'))
      .toMatchObject(expectedAction);
  });

  test('should create SIGN_OUT_REQUEST action', () => {
    const expectedAction = {
      type: SIGN_OUT_REQUEST,
    };

    expect(signOutRequest())
      .toMatchObject(expectedAction);
  });

  test('should create SIGN_IN_ERROR action', () => {
    const expectedAction = {
      type: SIGN_IN_ERROR,
    };

    expect(signInError())
      .toMatchObject(expectedAction);
  });

  test('should create SIGN_OUT_SUCCESS action', () => {
    const expectedAction = {
      type: SIGN_OUT_SUCCESS,
    };

    expect(signOutSuccess())
      .toMatchObject(expectedAction);
  });
});
