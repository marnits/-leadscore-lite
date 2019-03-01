import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const TextInput = ({
  value,
  onChange,
  placeholder,
  type,
  id,
}) => {
  const onInputChange = ({ target: { value: targetValue } }) => {
    onChange(targetValue);
  };

  return (
    <div className={styles.InputWithLabel}>
      <input
        type={type}
        id={id}
        onChange={onInputChange}
        className={styles.Input}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: null,
  type: 'text',
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
