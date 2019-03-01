import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string,
  size: PropTypes.number,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
});
