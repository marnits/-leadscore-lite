import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contacts from './Contacts';
import { fetchContactsRequest } from '../../actions/contacts';

const mapStateToProps = ({
  contacts: {
    byId,
    byHash,
    loading,
    total,
    offset,
  },
}) => ({
  contactsById: byId,
  contactsByHash: byHash,
  loading,
  last: total === offset,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: bindActionCreators(fetchContactsRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
