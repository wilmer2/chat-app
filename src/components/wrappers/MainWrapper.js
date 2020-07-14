import React from 'react';
import styled from 'styled-components';

const MainWrapperStyle = styled.section`
  background-color: #F8F9FA;
  min-height: 918px;
  border: 1px solid transparent;
`
const MainWrapper = ({ children }) => (
  <MainWrapperStyle>
    {children}
  </MainWrapperStyle>
);

export default MainWrapper;
