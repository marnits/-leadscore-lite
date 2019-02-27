import React from 'react';
import { shallow } from 'enzyme';
import { Route, Redirect } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';

describe('ProtectedRoute', () => {
  test('should render Route component when allowed', () => {
    const wrapper = shallow(<ProtectedRoute hasPermission test="test" />);

    const route = wrapper.find(Route);

    expect(route.exists()).toBe(true);
    expect(route.prop('test')).toBe('test');
  });

  test('should render Redirect to base route when not allowed', () => {
    const wrapper = shallow(<ProtectedRoute hasPermission={false} />);

    const redirect = wrapper.find(Redirect);

    expect(redirect.exists()).toBe(true);
    expect(redirect.prop('to')).toBe('/');
  });
});
