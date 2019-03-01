import React from 'react';
import { shallow, mount } from 'enzyme';
import { toast } from 'react-toastify';
import SignIn from '../SignIn';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const props = {
  signIn: () => {},
  error: false,
};

describe('SignIn', () => {
  test('should properly render all child components', () => {
    const wrapper = shallow(<SignIn {...props} />);

    const inputs = wrapper.find(TextInput);
    const button = wrapper.find(Button);

    expect(inputs.length).toBe(2);
    expect(button.length).toBe(1);
  });

  test('should set username by calling onUsernameChange', () => {
    const wrapper = shallow(<SignIn {...props} />);

    const instance = wrapper.instance();
    instance.onUsernameChange('Test Testov');
    expect(wrapper.state('username')).toBe('Test Testov');
  });

  test('should set password by calling onPasswordChange', () => {
    const wrapper = shallow(<SignIn {...props} />);

    const instance = wrapper.instance();
    instance.onPasswordChange('secretest');
    expect(wrapper.state('password')).toBe('secretest');
  });

  test('should set password by calling onPasswordChange', () => {
    const spy = jest.spyOn(props, 'signIn');
    const wrapper = shallow(<SignIn {...props} />);

    const instance = wrapper.instance();

    const button = wrapper.find(Button);
    instance.onUsernameChange('Test Testov');
    instance.onPasswordChange('secretest');

    button.simulate('click');

    expect(spy).toHaveBeenCalledWith('Test Testov', 'secretest');
  });

  test('should call method that needs to prevent default form behaviour', () => {
    const event = {
      preventDefault: () => {},
    };

    const spy = jest.spyOn(event, 'preventDefault');
    const wrapper = mount(<SignIn {...props} />);

    const form = wrapper.find('form');
    form.simulate('submit', event);

    expect(spy).toHaveBeenCalled();
  });

  test('should show notification after getting error from props', () => {
    const spy = jest.spyOn(toast, 'error');
    const wrapper = shallow(<SignIn {...props} />);

    expect(spy).not.toHaveBeenCalled();

    wrapper.setProps({ error: true });

    expect(spy).toHaveBeenCalled();
  });
});
