import mapContact from '../index';

describe('mapContact method', () => {
  test('should correctly map contact with emails and phoneNumbers', () => {
    const contact = {
      id: 'secretstring',
      displayName: 'Test Testov',
      phoneNumbers: [{
        primary: false,
        type: 'mobile',
        number: '0000',
      }, {
        primary: true,
        type: 'mobile',
        number: '1111',
      }],
      emails: [{
        primary: false,
        email: 'abc@xyz.io',
      }, {
        primary: false,
        email: 'dbc@xyz.io',
      }, {
        primary: false,
        email: 'xyz@xyz.io',
      }],
    };

    expect(mapContact(contact)).toEqual({
      id: 'secretstring',
      name: 'Test Testov',
      phoneNumber: '0000',
      email: 'abc@xyz.io',
    });
  });

  test('should correctly map contact without emails and phoneNumbers', () => {
    const contact = {
      id: 'secretstring',
      displayName: 'Test Testov',
    };

    expect(mapContact(contact)).toEqual({
      id: 'secretstring',
      name: 'Test Testov',
      phoneNumber: null,
      email: null,
    });
  });
});
