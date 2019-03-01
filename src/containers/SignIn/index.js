import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from './SignIn';
import { signInRequest } from '../../actions/authentication';

const mapStateToProps = ({ authentication: { error } }) => ({
  error,
});

const mapDispatchToProps = dispatch => ({
  signIn: bindActionCreators(signInRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
