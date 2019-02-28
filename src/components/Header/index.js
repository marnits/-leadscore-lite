import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Header = ({ text }) => (
  <span className={styles.Header}>{text}</span>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
