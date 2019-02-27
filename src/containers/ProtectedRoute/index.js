import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

const mapStateToProps = ({ authentication: { token } }) => ({
  hasPermission: !!token,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
