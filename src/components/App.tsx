import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
/* components */
import Logo from './Logo/Logo';
import Sider from './Sider/Sider';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Content from './Content/Content';
/* others */
import items from '../configs/nav-items';

/* types */
interface IContentLayout {
  readonly collapsed: boolean;
}

const App: React.FC = () => {
  const [collapsed, setColapsed] = useState<boolean>(false);

  const onCollapse = (status: boolean): void => {
    setColapsed(status);
  };

  return (
    <MainLayout>
      <Sider collapsed={collapsed} onCollapse={onCollapse}>
        <Logo />
        <Menu items={items} />
      </Sider>
      <ContentLayout collapsed={collapsed}>
        <Content />
        <Footer />
      </ContentLayout>
    </MainLayout>
  );
};

const MainLayout = styled(Layout)`
  min-height: 100vh;
`;

const ContentLayout = styled(Layout)<IContentLayout>`
  margin-left: ${props => (props.collapsed ? '80px' : '200px')};
  transition: margin-left 0.2s ease-out;
`;

export default App;
