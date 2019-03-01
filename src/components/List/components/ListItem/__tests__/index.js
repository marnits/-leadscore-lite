import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../index';

const columns = [{
  name: 'Test',
}, {
  name: 'ABC',
}, {
  name: 'XYZ',
}];

describe('ListItem', () => {
  test('should render component properly', () => {
    const tree = renderer.create(
      <ListItem columns={columns}>
        <p>test</p>
        <span>test 2</span>
        <span>test 3</span>
      </ListItem>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should render component properly', () => {
    const [first, ...rest] = columns;
    const tree = renderer.create(
      <ListItem columns={rest}>
        <p>{first.name}</p>
        <span>test 2</span>
        <span>test 3</span>
      </ListItem>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
