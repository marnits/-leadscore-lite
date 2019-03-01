import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TextInput from '../index';

const props = {
  id: 'input',
  placeholder: 'test',
  value: '',
  onChange: text => text,
};

describe('TextInput', () => {
  test('should render TextInput', () => {
    const tree = renderer.create(<TextInput {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should probably simulate changes inside input', () => {
    const spy = jest.spyOn(props, 'onChange');
    const wrapper = shallow(<TextInput {...props} />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'changed' } });

    expect(spy).toHaveBeenCalledWith('changed');
  });
});
