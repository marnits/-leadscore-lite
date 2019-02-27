import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../SignIn';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

describe('SignIn', () => {
  test('should properly render all child components', () => {
    const wrapper = shallow(<SignIn signIn={() => {}} />);

    const inputs = wrapper.find(TextInput);
    const button = wrapper.find(Button);

    expect(inputs.length).toBe(2);
    expect(button.length).toBe(1);
  });

  test('should set username by calling onUsernameChange', () => {
    const wrapper = shallow(<SignIn signIn={() => {}} />);

    const instance = wrapper.instance();
    instance.onUsernameChange('Test Testov');
    expect(wrapper.state('username')).toBe('Test Testov');
  });

  test('should set password by calling onPasswordChange', () => {
    const wrapper = shallow(<SignIn signIn={() => {}} />);

    const instance = wrapper.instance();
    instance.onPasswordChange('secretest');
    expect(wrapper.state('password')).toBe('secretest');
  });

  test('should set password by calling onPasswordChange', () => {
    const props = {
      signIn: () => {},
    };

    const spy = jest.spyOn(props, 'signIn');
    const wrapper = shallow(<SignIn {...props} />);

    const instance = wrapper.instance();

    const button = wrapper.find(Button);
    instance.onUsernameChange('Test Testov');
    instance.onPasswordChange('secretest');

    button.simulate('click');

    expect(spy).toHaveBeenCalledWith('Test Testov', 'secretest');
  });
});
