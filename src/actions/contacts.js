import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from '../constants/actionTypes';

export const fetchContactsRequest = (limit = 25) => ({
  type: FETCH_CONTACTS_REQUEST,
  payload: {
    limit,
  },
});

export const fetchContactsSuccess = (contacts, total) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: {
    contacts,
    total,
  },
});
