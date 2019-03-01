import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List';
import Text from '../../components/Text';
import ListItem from '../../components/List/components/ListItem';
import styles from './styles.module.scss';
import contactType from '../../utils/propTypes/contact';

const columns = [{
  name: 'Name',
  size: 3,
  align: 'left',
}, {
  name: 'Email',
  size: 2,
  align: 'left',
}, {
  name: 'Phone Number',
  size: 1,
  align: 'right',
}];

class Contacts extends PureComponent {
  componentDidMount() {
    const { fetchContacts } = this.props;

    fetchContacts();
  }

  render() {
    const {
      contactsById,
      contactsByHash,
      fetchContacts,
      loading,
      last,
    } = this.props;

    return (
      <div className={styles.list}>
        <List
          title="Contacts"
          columns={columns}
          loadMore={fetchContacts}
          loading={loading}
          last={last}
        >
          {contactsById.map(id => (
            <ListItem key={id}>
              <Text strong text={contactsByHash[id].name} />
              <Text text={contactsByHash[id].email} />
              <Text text={contactsByHash[id].phoneNumber} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

Contacts.propTypes = {
  last: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchContacts: PropTypes.func.isRequired,
  contactsById: PropTypes.arrayOf(PropTypes.string).isRequired,
  contactsByHash: PropTypes.objectOf(contactType).isRequired,
};

export default Contacts;
