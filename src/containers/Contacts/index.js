import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contacts from './Contacts';
import { signOutRequest } from '../../actions/authentication';

const mapDispatchToProps = dispatch => ({
  signOut: bindActionCreators(signOutRequest, dispatch),
});

export default connect(null, mapDispatchToProps)(Contacts);
