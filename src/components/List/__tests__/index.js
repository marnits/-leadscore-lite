import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import List from '../index';

const props = {
  title: 'Test list',
  loading: false,
  last: false,
  columns: [
    {
      name: 'test1',
    },
  ],
  loadMore: () => {},
};

describe('List', () => {
  test('should call assignScrollableRef method', () => {
    const spy = jest.spyOn(List.prototype, 'assignScrollableRef')
      .mockImplementation(function mock() {
        this.scrollable = {
          offsetHeight: 100,
          scrollTop: 100,
          clientHeight: 100,
        };
      });

    mount(<List {...props} />);

    expect(spy).toHaveBeenCalled();
  });

  test('should not return 0 while calling calculateShadowWidth method when not mounted', () => {
    const wrapper = shallow(<List {...props} />);

    const calculate = wrapper.instance().calculateShadowWidth();

    expect(calculate).toBe(0);
  });

  test('should not return 0 while calling calculateShadowWidth method when not mounted', () => {
    const wrapper = shallow(<List {...props} />);

    const calculate = wrapper.instance().calculateShadowWidth();

    expect(calculate).toBe(0);
  });

  test('should test calculateShadowWidth method', () => {
    jest.spyOn(List.prototype, 'assignScrollableRef')
      .mockImplementation(function mock() {
        this.scrollable = {
          offsetHeight: 300,
          scrollTop: 200,
          clientHeight: 100,
          clientWidth: 1,
        };
      });

    const wrapper = mount(<List {...props} />);

    const calculate = wrapper.instance().calculateShadowWidth();

    expect(calculate).toBe('1px');
  });

  test('should not load items when scrolled not enough', () => {
    const spy = jest.spyOn(List.prototype, 'assignScrollableRef')
      .mockImplementation(function mock() {
        this.scrollable = {
          offsetHeight: 300,
          scrollTop: 200,
          clientHeight: 100,
        };
      });

    const wrapper = mount(<List {...props} />);

    const shouldLoadMore = wrapper.instance().shouldLoadMoreItems();

    expect(spy).toHaveBeenCalled();
    expect(shouldLoadMore).toBe(false);
  });

  test('should not load items when still loading', () => {
    const spy = jest.spyOn(List.prototype, 'assignScrollableRef')
      .mockImplementation(function mock() {
        this.scrollable = {
          offsetHeight: 0,
          scrollTop: 0,
          clientHeight: 0,
        };
      });

    const wrapper = mount(<List {...props} loading />);

    const shouldLoadMore = wrapper.instance().shouldLoadMoreItems();

    expect(spy).toHaveBeenCalled();
    expect(shouldLoadMore).toBe(false);
  });

  test('should load items when scrolled enough', () => {
    const spy = jest.spyOn(List.prototype, 'assignScrollableRef')
      .mockImplementation(function mock() {
        this.scrollable = {
          scrollHeight: 0,
          scrollTop: 0,
          clientHeight: 100,
        };
      });

    const wrapper = mount(<List {...props} />);

    const shouldLoadMore = wrapper.instance().shouldLoadMoreItems();

    expect(spy).toHaveBeenCalled();
    expect(shouldLoadMore).toBe(true);
  });

  test('should scolled and not set or call anything', () => {
    const load = jest.spyOn(props, 'loadMore');
    jest.spyOn(List.prototype, 'assignScrollableRef')
      .mockImplementation(function mock() {
        this.scrollable = {
          offsetHeight: 300,
          scrollTop: 200,
          clientHeight: 100,
        };
      });

    const wrapper = mount(<List {...props} />);

    expect(wrapper.state('bottomReached')).toBe(false);

    wrapper.instance().handleScroll();

    expect(wrapper.state('bottomReached')).toBe(false);
    expect(load).not.toHaveBeenCalled();
  });

  test('should call loadMore when scolled close to the bottom', () => {
    const load = jest.spyOn(props, 'loadMore');
    const spy = jest.spyOn(List.prototype, 'assignScrollableRef')
      .mockImplementation(function mock() {
        this.scrollable = {
          scrollHeight: 0,
          scrollTop: 0,
          clientHeight: 100,
        };
      });

    const wrapper = mount(<List {...props} />);

    wrapper.instance().handleScroll();

    expect(spy).toHaveBeenCalled();
    expect(load).toHaveBeenCalled();
  });

  test('should set state properly when bottom reached', () => {
    jest.spyOn(List.prototype, 'assignScrollableRef')
      .mockImplementation(function mock() {
        this.scrollable = {
          scrollHeight: 300,
          scrollTop: 200,
          clientHeight: 100,
        };
      });

    const wrapper = mount(<List {...props} />);

    expect(wrapper.state('bottomReached')).toBe(false);

    wrapper.instance().handleScroll();

    expect(wrapper.state('bottomReached')).toBe(true);
  });

  test('should test static method called getDerivedStateFromProps', () => {
    expect(List.getDerivedStateFromProps({ last: false }, { bottomReached: true }))
      .toBe(null);
    expect(List.getDerivedStateFromProps({ last: true }, { bottomReached: true }))
      .toEqual({ showShadow: false });
  });

  test('should properly render list without children', () => {
    const tree = renderer.create(<List {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
