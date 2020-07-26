import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <h3 className={styles.title}>Find contacts by name</h3>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
