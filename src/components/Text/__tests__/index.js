import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../index';

describe('Text', () => {
  test('should render component properly', () => {
    const tree = renderer.create(<Text text="text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
