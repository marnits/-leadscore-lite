import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../index';

describe('Button', () => {
  test('should render component properly', () => {
    const tree = renderer.create(<Button text="test" onClick={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render component properly', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(
      <Button
        className="primary"
        text="test"
        onClick={handleClick}
        type="submit"
      />,
    );

    wrapper.find('button').simulate('click');

    expect(handleClick.mock.instances.length).toBe(1);
  });
});
