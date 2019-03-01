import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/customizations';

const UnprotectedRoute = ({ hasPermission, ...props }) => (
  hasPermission
    ? <Redirect to={HOME_ROUTE} />
    : <Route {...props} />
);

UnprotectedRoute.propTypes = {
  hasPermission: PropTypes.bool.isRequired,
};

export default UnprotectedRoute;
