import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from '../constants/actionTypes';

export const signInRequest = (username, password) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    username,
    password,
  },
});

export const signInSuccess = authToken => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    authToken,
  },
});

export const signOutRequest = () => ({
  type: SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});
