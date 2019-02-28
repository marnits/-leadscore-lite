import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';
import { signOutRequest } from '../../actions/authentication';

const mapDispatchToProps = dispatch => ({
  signOut: bindActionCreators(signOutRequest, dispatch),
});

export default connect(null, mapDispatchToProps)(Home);
