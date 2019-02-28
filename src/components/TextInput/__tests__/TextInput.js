import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TextInput from '../index';

describe('TextInput', () => {
  test('should render TextInput without label', () => {
    const tree = renderer.create(<TextInput id="input" value="" onChange={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render TextInput with label', () => {
    const tree = renderer.create(<TextInput label="test" id="input" value="" onChange={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should probably simulate changes inside input', () => {
    const props = {
      id: 'input',
      value: '',
      onChange: text => text,
    };

    const spy = jest.spyOn(props, 'onChange');
    const wrapper = shallow(<TextInput {...props} />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'changed' } });

    expect(spy).toHaveBeenCalledWith('changed');
  });
});
