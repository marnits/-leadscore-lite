import { connect } from 'react-redux';
import UnprotectedRoute from './UnprotectedRoute';

const mapStateToProps = ({ authentication: { authToken } }) => ({
  hasPermission: !!authToken,
});

export default connect(mapStateToProps, null)(UnprotectedRoute);
