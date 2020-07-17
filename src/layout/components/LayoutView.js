import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import MainWrapper from '../../components/wrappers/MainWrapper';

const WrapperSidebar = ({ children }) => (
  <div className="d-flex">
    <SideMenu />
    {children }
  </div>
);

const LayoutView = ({ children, isConnect }) => {
  const history = useHistory();
  
  useEffect(() => {
    if (isConnect) {
      history.push('/rooms');
    }
  }, [isConnect, history]);

  return (
    <>
      <Header />
      <MainWrapper>
        {!isConnect ? children : <WrapperSidebar>{children}</WrapperSidebar>}
      </MainWrapper>
    </>
  );
}

export default LayoutView;
