import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ListItem = ({ columns, children }) => {
  const renderColumn = (child, index) => (
    columns[index] && (
      <div
        className={`
          ${styles[`align-content-${columns[index].align}`]}
          ${styles.column}
          ${styles[`flex-${columns[index].size}`]}
        `}
        key={columns[index].name}
      >
        {child}
      </div>
    )
  );

  return (
    <div className={styles.row}>
      {children.map(renderColumn)}
    </div>
  );
};

ListItem.defaultProps = {
  columns: [],
};

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
    align: PropTypes.oneOf([
      'left',
      'center',
      'right',
    ]),
  })),
};

export default ListItem;
