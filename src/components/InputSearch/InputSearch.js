import React from 'react';

const InputSearch = ({ filterValue, onChange }) => (
  <input type="text" value={filterValue} onChange={onChange} />
);

export default InputSearch;
