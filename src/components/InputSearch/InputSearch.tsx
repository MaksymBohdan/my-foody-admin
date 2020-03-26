import React from 'react';

interface IInputSearch {
  filterValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch: React.FC<IInputSearch> = ({ filterValue, onChange }) => (
  <input type="text" value={filterValue} onChange={onChange} />
);

export default InputSearch;
