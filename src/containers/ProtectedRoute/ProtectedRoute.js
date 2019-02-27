import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ hasPermission, ...props }) => (
  hasPermission
    ? <Route {...props} />
    : <Redirect to="/" />
);

ProtectedRoute.propTypes = {
  hasPermission: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
