import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { SIGN_IN_ROUTE } from '../../constants/customizations';

const ProtectedRoute = ({ hasPermission, ...props }) => (
  hasPermission
    ? <Route {...props} />
    : <Redirect to={SIGN_IN_ROUTE} />
);

ProtectedRoute.propTypes = {
  hasPermission: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
