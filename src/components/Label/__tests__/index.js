import React from 'react';
import renderer from 'react-test-renderer';
import Label from '../index';

describe('Label', () => {
  test('should render component properly', () => {
    const tree = renderer.create(<Label htmlFor="test" text="label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
