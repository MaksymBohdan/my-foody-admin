import React, { Fragment } from 'react';

type CategoryType = {
  id: number;
  name: string;
};

interface ICategorySelector {
  options: CategoryType[];
  onChange: (category: string) => void;
  value: string;
}

const CategorySelector: React.FC<ICategorySelector> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <Fragment>
      <select
        style={{ fontSize: 16 }}
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
