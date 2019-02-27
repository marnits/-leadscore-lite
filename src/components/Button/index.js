import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Button = ({
  text,
  onClick,
  className,
  type,
}) => {
  const classes = `${styles.Button} ${styles[className]}`;

  return <button type={type} className={classes} onClick={onClick}>{text}</button>;
};

Button.defaultProps = {
  className: '',
  type: 'button',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
