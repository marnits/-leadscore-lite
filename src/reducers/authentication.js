import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  authToken: null,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        error: false,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        error: false,
        authToken: payload.authToken,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error: true,
      };
    case SIGN_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
