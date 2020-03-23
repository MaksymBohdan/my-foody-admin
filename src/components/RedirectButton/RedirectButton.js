import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const RedirectButton = ({ lable, location }) => (
  <Link to={location}>
    <Button type="primary">{lable}</Button>
  </Link>
);

export default RedirectButton;
