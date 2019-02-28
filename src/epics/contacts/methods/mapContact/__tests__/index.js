import mapContact from '../index';

describe('mapContact method', () => {
  test('should correctly map contact without emails and phoneNumbers', () => {
    const contact = {
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
      name: 'Test Testov',
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
    });
  });
});
