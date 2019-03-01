import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Text = ({ text, strong }) => (
  <span className={`${styles.text} ${strong && styles.strong}`}>{text}</span>
);

Text.defaultProps = {
  strong: false,
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  strong: PropTypes.bool,
};

export default Text;
