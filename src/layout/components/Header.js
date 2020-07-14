import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  background-color: #45619D;
  display: flex;
  align-items: center;
  height: 60px;
  color: white;
`;

const Header = () => (
  <HeaderStyles>
    <div className="container">
      <div>
        Ingresa a Chat 
      </div>
    </div>
  </HeaderStyles>
);

export default Header;
