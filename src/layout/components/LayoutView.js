import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import MainWrapper from '../../components/wrappers/MainWrapper';

const WrapperSidebar = ({ children }) => (
  <div className="d-flex">
    <SideMenu />
    {children }
  </div>
);

const LayoutView = ({ children, isConnect }) => (
  <>
    <Header />
    <MainWrapper>
      {!true ? children : <WrapperSidebar>{children}</WrapperSidebar>}
    </MainWrapper>
  </>
);

export default LayoutView;
