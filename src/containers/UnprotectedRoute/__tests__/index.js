import React from 'react';
import { shallow } from 'enzyme';
import { Route, Redirect } from 'react-router-dom';
import UnprotectedRoute from '../UnprotectedRoute';

describe('UnprotectedRoute', () => {
  test('should render Route component when allowed', () => {
    const wrapper = shallow(<UnprotectedRoute hasPermission />);

    const redirect = wrapper.find(Redirect);

    expect(redirect.exists()).toBe(true);
    expect(redirect.prop('to')).toBe('/contacts');
  });

  test('should render Redirect to base route when not allowed', () => {
    const wrapper = shallow(<UnprotectedRoute hasPermission={false} test="test" />);

    const route = wrapper.find(Route);

    expect(route.exists()).toBe(true);
    expect(route.prop('test')).toBe('test');
  });
});
