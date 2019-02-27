import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../index';

describe('Spinner', () => {
  test('should render spinner', () => {
    const tree = renderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
