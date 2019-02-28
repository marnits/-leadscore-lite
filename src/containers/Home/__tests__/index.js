import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';
import Button from '../../../components/Button';
import Contacts from '../../Contacts';

describe('Home', () => {
  test('should properly render all elements', () => {
    const wrapper = shallow(<Home signOut={() => {}} />);

    expect(wrapper.find(Button).exists()).toBe(true);
    expect(wrapper.find(Contacts).exists()).toBe(true);
  });
});
