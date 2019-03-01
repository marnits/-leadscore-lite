import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Label from '../Label';
import Text from '../Text';
import Spinner from '../Spinner';
import styles from './styles.module.scss';
import columnType from '../../utils/propTypes/column';

const isScrolledToBottom = el => el.scrollHeight - el.scrollTop === el.clientHeight;
const isCloseToTheBottom = el => el.scrollHeight - el.scrollTop <= el.clientHeight + 100;

class List extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      bottomReached: false,
      showShadow: true,
    };

    this.assignScrollableRef = this.assignScrollableRef.bind(this);
  }

  static getDerivedStateFromProps({ last }, { bottomReached }) {
    return last
      ? {
        showShadow: !bottomReached,
      }
      : null;
  }

  shouldLoadMoreItems = () => {
    const { last, loading } = this.props;

    return isCloseToTheBottom(this.scrollable) && !last && !loading;
  };

  calculateShadowWidth = () => (
    this.scrollable
      ? `${this.scrollable.clientWidth}px`
      : 0
  );

  handleScroll = () => {
    const { bottomReached } = this.state;
    const { loadMore } = this.props;

    if (this.shouldLoadMoreItems()) {
      loadMore();
    }

    if (isScrolledToBottom(this.scrollable) !== bottomReached) {
      this.setState({
        bottomReached: isScrolledToBottom(this.scrollable),
      });
    }
  };

  passPropsToChildren = (children, columns) => (
    React.Children.map(children, child => (
      React.cloneElement(child, { columns })
    ))
  );

  renderEmptyElements = () => {
    const { loading } = this.props;
    return !loading && (
      <div className={styles.empty}>
        <Text type="subdued" text="There are no elements" />
      </div>
    );
  }

  assignScrollableRef(scrollable) {
    this.scrollable = scrollable;
  }

  render() {
    const {
      loading,
      title,
      columns,
      children,
    } = this.props;
    const { showShadow } = this.state;

    return (
      <div className={styles.wrapper}>
        {title && (
          <div className={styles.title}>
            <Header text={title} />
          </div>
        )}
        <div className={styles.row}>
          {columns.map(column => (
            <div
              className={`
                ${styles['column-name']}
                ${styles[`align-content-${column.align}`]}
                ${styles[`flex-${column.size}`]}
              `}
              key={column.name}
            >
              <Label type="small" text={column.name} />
            </div>
          ))}
        </div>
        <div
          ref={this.assignScrollableRef}
          className={styles.list}
          onScroll={this.handleScroll}
        >
          {children && children.length !== 0
            ? this.passPropsToChildren(children, columns)
            : this.renderEmptyElements()
          }
          {loading && <Spinner />}
        </div>
        {(showShadow && !loading) && (
          <div
            className={styles.shadow}
            style={{ width: this.calculateShadowWidth() }}
          />
        )}
      </div>
    );
  }
}

List.propTypes = {
  last: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(columnType).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  loadMore: PropTypes.func.isRequired,
};

List.defaultProps = {
  children: null,
};

export default List;
