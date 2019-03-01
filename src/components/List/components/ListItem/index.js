import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import columnType from '../../../../utils/propTypes/column';

const ListItem = ({ columns, children }) => {
  const renderColumn = (child, index) => {
    if (!columns[index]) {
      return null;
    }

    const { align = 'left', size = 1 } = columns[index];

    return (
      <div
        className={`
          ${styles.column}
          ${styles[`align-content-${align}`]}
          ${styles[`flex-${size}`]}
        `}
        key={columns[index].name}
      >
        {child}
      </div>
    );
  };

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
  columns: PropTypes.arrayOf(columnType),
};

export default ListItem;
