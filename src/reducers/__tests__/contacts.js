import reducer from '../contacts';
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  SIGN_OUT_SUCCESS,
} from '../../constants/actionTypes';

describe('contacts reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject({
      total: 0,
      loading: false,
      offset: 0,
      limit: null,
      byHash: {},
      byId: [],
    });
  });

  test('should handle FETCH_CONTACTS_REQUEST', () => {
    expect(
      reducer({
        total: 10,
        offset: 10,
        limit: 25,
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
      total: 10,
      offset: 10,
      limit: 25,
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
        total: 0,
        loading: false,
        offset: 0,
        limit: 25,
        byHash: {},
        byId: [],
      }, {
        type: FETCH_CONTACTS_SUCCESS,
        payload: {
          contacts: [{
            id: 'test',
          }],
          total: 20,
        },
      }),
    ).toMatchObject({
      total: 20,
      offset: 1,
      limit: 25,
      loading: false,
      byHash: {
        test: { id: 'test' },
      },
      byId: ['test'],
    });
  });

  test('should handle SIGN_OUT_SUCCESS', () => {
    expect(
      reducer({
        total: 20,
        offset: 1,
        limit: 25,
        loading: false,
        byHash: {
          test: { id: 'test' },
        },
        byId: ['test'],
      }, {
        type: SIGN_OUT_SUCCESS,
      }),
    ).toMatchObject({
      total: 0,
      loading: false,
      offset: 0,
      limit: null,
      byHash: {},
      byId: [],
    });
  });
});
