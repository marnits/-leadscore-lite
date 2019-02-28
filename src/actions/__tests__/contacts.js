import {
  fetchContactsRequest,
  fetchContactsSuccess,
} from '../contacts';
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from '../../constants/actionTypes';

describe('contacts actions', () => {
  test('should create FETCH_CONTACTS_REQUEST action with default values', () => {
    const expectedAction = {
      type: FETCH_CONTACTS_REQUEST,
      payload: {
        limit: 25,
      },
    };

    expect(fetchContactsRequest())
      .toMatchObject(expectedAction);
  });

  test('should create FETCH_CONTACTS_REQUEST action with specific values', () => {
    const expectedAction = {
      type: FETCH_CONTACTS_REQUEST,
      payload: {
        limit: 10,
      },
    };

    expect(fetchContactsRequest(10))
      .toMatchObject(expectedAction);
  });

  test('should create SIGN_IN_SUCCESS action', () => {
    const expectedAction = {
      type: FETCH_CONTACTS_SUCCESS,
      payload: {
        contacts: [{
          firstName: 'Test',
          lastName: 'Testov',
        }],
      },
    };

    expect(fetchContactsSuccess([{ firstName: 'Test', lastName: 'Testov' }]))
      .toMatchObject(expectedAction);
  });
});
