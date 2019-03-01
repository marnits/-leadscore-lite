import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from '../constants/actionTypes';

import { FETCH_CONTACTS_LIMIT } from '../constants/customizations';

export const fetchContactsRequest = (limit = FETCH_CONTACTS_LIMIT) => ({
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
