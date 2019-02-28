import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  offset: 0,
  limit: null,
  byHash: {},
  byId: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
        limit: payload.limit,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        byHash: payload.contacts
          .reduce((byHash, contact) => ({
            ...byHash,
            [contact.id]: contact,
          }), state.byHash),
        byId: [
          ...state.byId,
          ...payload.contacts.map(contact => contact.id),
        ],
        offset: state.offset + payload.contacts.length,
      };
    default:
      return state;
  }
};
