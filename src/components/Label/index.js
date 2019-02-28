import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Label = ({ htmlFor, text }) => (
  <label htmlFor={htmlFor} className={styles.Label}>{text}</label>
);

Label.defaultProps = {
  htmlFor: null,
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Label;
