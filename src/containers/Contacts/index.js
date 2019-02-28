import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contacts from './Contacts';
import { signOutRequest } from '../../actions/authentication';
import { fetchContactsRequest } from '../../actions/contacts';

const mapDispatchToProps = dispatch => ({
  signOut: bindActionCreators(signOutRequest, dispatch),
  fetchContacts: bindActionCreators(fetchContactsRequest, dispatch),
});

export default connect(null, mapDispatchToProps)(Contacts);
