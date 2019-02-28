import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Contacts from '../Contacts';

const props = {
  contactsById: ['123'],
  contactsByHash: {
    123: {
      id: '123',
      name: 'Test Test',
      email: 'abc@xyz.io',
      phoneNumber: '+48 423 231 543',
    },
  },
  last: false,
  loading: false,
  fetchContacts: () => {},
};

describe('Contacts', () => {
  test('should call fetchContacts on componentDidMount', () => {
    const spy = jest.spyOn(props, 'fetchContacts');
    const wrapper = shallow(<Contacts {...props} />);

    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  test('should properly render all children', () => {
    const tree = renderer.create(<Contacts {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
