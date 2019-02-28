import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../index';

describe('Header', () => {
  test('should render component properly', () => {
    const tree = renderer.create(<Header text="header" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
