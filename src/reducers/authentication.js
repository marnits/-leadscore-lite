import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  authToken: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authToken: payload.authToken,
      };
    case SIGN_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
