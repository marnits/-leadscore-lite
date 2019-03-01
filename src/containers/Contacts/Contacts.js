import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List';
import Text from '../../components/Text';
import ListItem from '../../components/List/components/ListItem';
import styles from './styles.module.scss';
import columns from './columns';
import contactType from '../../utils/propTypes/contact';

class Contacts extends PureComponent {
  componentDidMount() {
    const { fetchContacts } = this.props;

    fetchContacts();
  }

  renderItem = (id) => {
    const { contactsByHash } = this.props;

    return (
      <ListItem key={id}>
        <Text strong text={contactsByHash[id].name} />
        <Text text={contactsByHash[id].email} />
        <Text text={contactsByHash[id].phoneNumber} />
      </ListItem>
    );
  };

  render() {
    const {
      contactsById,
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
          {contactsById.map(this.renderItem)}
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
