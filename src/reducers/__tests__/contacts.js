import reducer from '../contacts';
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from '../../constants/actionTypes';

describe('contacts reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject({
      loading: false,
      byHash: {},
      byId: [],
    });
  });

  test('should handle FETCH_CONTACTS_REQUEST', () => {
    expect(
      reducer({
        loading: false,
        byHash: {
          test: { id: 'test' },
        },
        byId: ['test'],
      }, {
        type: FETCH_CONTACTS_REQUEST,
        payload: {
          offset: 0,
          limit: 25,
        },
      }),
    ).toMatchObject({
      loading: true,
      byHash: {
        test: { id: 'test' },
      },
      byId: ['test'],
    });
  });

  test('should handle FETCH_CONTACTS_SUCCESS', () => {
    expect(
      reducer({
        loading: true,
        byHash: {},
        byId: [],
      }, {
        type: FETCH_CONTACTS_SUCCESS,
        payload: {
          contacts: [{
            id: 'test',
          }],
        },
      }),
    ).toMatchObject({
      loading: false,
      byHash: {
        test: { id: 'test' },
      },
      byId: ['test'],
    });
  });
});
