import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Spinner = ({
  className,
}) => (
  <div className={`Spinner ${className}`} />
);

Spinner.defaultProps = {
  className: 'medium',
};

Spinner.propTypes = {
  className: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Spinner;
