import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Contacts from '../Contacts';
import styles from './styles.module.scss';

const Home = ({ signOut }) => (
  <div className={styles.wrapper}>
    <div className={styles.navbar}>
      <Button text="Sign Out" className="secondary" onClick={signOut} />
    </div>
    <div className={styles.content}>
      <Contacts />
    </div>
  </div>
);

Home.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Home;
