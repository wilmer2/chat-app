import React from 'react';
import Header from './Header';
import MainWrapper from '../../components/wrappers/MainWrapper';

const LayoutView = ({ children }) => (
  <>
    <Header />
    <MainWrapper>
      {children}
    </MainWrapper>
  </>
);

export default LayoutView;
