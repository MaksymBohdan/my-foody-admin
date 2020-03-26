import React from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import routes from './routes';

export default [
  {
    name: 'Main',
    path: routes.MAIN,
    logo: <DesktopOutlined />,
  },
  {
    name: 'Menu',
    path: routes.MENU,
    logo: <PieChartOutlined />,
  },
  {
    name: 'Other',
    path: routes.OTHER,
    logo: <FileOutlined />,
  },
];
