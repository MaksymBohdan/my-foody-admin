import React, { Fragment } from 'react';

const MenuItemNewView = ({
  name,
  description,
  category,
  onSubmit,
  onChange,
}) => (
  <Fragment>
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={onChange} />
      <br />
      <label>Description</label>
      <textarea
        type="text"
        name="description"
        value={description}
        onChange={onChange}
      />
      <br />
      <label>Category</label>
      <select value={category} name="category" onChange={onChange}>
        <option value="category 1">category 1</option>
        <option value="category 2">category 2</option>
        <option value="category 3">category 3</option>
        <option value="category 4">category 4</option>
      </select>
      <br />
      <button type="submit">SEND</button>
    </form>
  </Fragment>
);

export default MenuItemNewView;
