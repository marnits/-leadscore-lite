import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

const mapStateToProps = ({ authentication: { authToken } }) => ({
  hasPermission: !!authToken,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
