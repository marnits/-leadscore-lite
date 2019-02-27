import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const UnprotectedRoute = ({ hasPermission, ...props }) => (
  hasPermission
    ? <Redirect to="/contacts" />
    : <Route {...props} />
);

UnprotectedRoute.propTypes = {
  hasPermission: PropTypes.bool.isRequired,
};

export default UnprotectedRoute;
