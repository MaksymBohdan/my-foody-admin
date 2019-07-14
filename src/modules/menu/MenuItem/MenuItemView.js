import React from 'react';

const MenuItemView = ({ item, handleGoBack }) => {
  const { id, description, image, name } = item && item;

  return (
    <React.Fragment>
      <div>Menu Item ID - {id}</div>
      <img src={image} alt={name} width={320} height={240} />
      <div>Description {description}</div>
      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
    </React.Fragment>
  );
};

export default MenuItemView;
