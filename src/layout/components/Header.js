import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  background-color: #45619D;
  display: flex;
  align-items: center;
  height: 60px;
  color: white;
  padding-left: 32px;
  padding-right: 32px
`;

const Header = () => (
  <HeaderStyles>
    <div>
      Ingresa a Chat 
    </div>
  </HeaderStyles>
);

export default Header;
