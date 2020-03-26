import React from 'react';
import { Layout } from 'antd';

interface ISider {
  children: React.ReactNode;
  collapsed: boolean;
  onCollapse: (status: boolean) => void;
}

const Sider: React.FC<ISider> = ({ children, collapsed, onCollapse }) => (
  <Layout.Sider
    collapsible
    collapsed={collapsed}
    onCollapse={onCollapse}
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
    }}
  >
    {children}
  </Layout.Sider>
);

export default Sider;
