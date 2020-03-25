import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Logo from './Logo/Logo';
import Sider from './Sider/Sider';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import items from '../configs/nav-items';

const App = () => {
  const [collapsed, setColapsed] = useState(false);

  const onCollapse = status => {
    setColapsed(status);
  };

  return (
    <MainLayout>
      <Sider collapsed={collapsed} onCollapse={onCollapse}>
        <Logo />
        <Menu items={items} />
      </Sider>
      <ContentLayout className="site-layout" collapsed={collapsed ? 1 : 0}>
        <Content />
        <Footer />
      </ContentLayout>
    </MainLayout>
  );
};

const MainLayout = styled(Layout)`
  min-height: 100vh;
`;

const ContentLayout = styled(Layout)`
  margin-left: ${props => (props.collapsed ? '80px' : '200px')};
  transition: margin-left 0.2s ease-out;
`;

export default App;
