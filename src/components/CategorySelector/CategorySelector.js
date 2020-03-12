import React, { Fragment } from 'react';

const styles = {
  select: {
    fontSize: 16,
  },
};
const CategorySelector = ({ options, onChange, value }) => {
  return (
    <Fragment>
      <select
        style={styles.select}
        onChange={e => onChange(e.target.value)}
        value={value}
      >
        {options.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default CategorySelector;
