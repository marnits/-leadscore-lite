import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from './SignIn';
import { signInRequest } from '../../actions/authentication';

const mapDispatchToProps = dispatch => ({
  signIn: bindActionCreators(signInRequest, dispatch),
});

export default connect(null, mapDispatchToProps)(SignIn);
