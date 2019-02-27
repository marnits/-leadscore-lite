import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import styles from './styles.module.scss';

const Contacts = ({ signOut }) => (
  <div className={styles.wrapper}>
    <div className={styles.navbar}>
      <Button text="Sign Out" onClick={signOut} />
    </div>
  </div>
);

Contacts.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Contacts;
