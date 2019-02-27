import { connect } from 'react-redux';
import UnprotectedRoute from './UnprotectedRoute';

const mapStateToProps = ({ authentication: { token } }) => ({
  hasPermission: !!token,
});

export default connect(mapStateToProps, null)(UnprotectedRoute);
