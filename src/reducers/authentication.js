import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  token: null,
};

const authentication = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: payload.token,
      };
    case SIGN_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default authentication;
