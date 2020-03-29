import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

interface IRedirectButton {
  lable: string;
  location: string;
}

const RedirectButton: React.FC<IRedirectButton> = ({ lable, location }) => (
  <Link to={location}>
    <Button type="primary">{lable}</Button>
  </Link>
);

export default RedirectButton;
