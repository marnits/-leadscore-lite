import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import styles from './styles.module.scss';

const TextInput = ({
  value,
  onChange,
  label,
  type,
  id,
}) => {
  const onInputChange = ({ target: { value: targetValue } }) => {
    onChange(targetValue);
  };

  return (
    <div className={styles.InputWithLabel}>
      {label && <Label htmlFor={id} text={label} />}
      <input
        type={type}
        id={id}
        onChange={onInputChange}
        className={`${styles.Input} ${value ? 'Input-initialized' : null}`}
        value={value}
      />
    </div>
  );
};

TextInput.defaultProps = {
  label: '',
  type: 'text',
};

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
