import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import styles from './styles.module.scss';

class Contacts extends PureComponent {
  componentDidMount() {
    const { fetchContacts } = this.props;

    fetchContacts();
  }

  render() {
    const { signOut } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <Button text="Sign Out" onClick={signOut} />
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  signOut: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

export default Contacts;
