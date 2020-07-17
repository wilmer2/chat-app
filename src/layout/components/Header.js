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

const HeaderIcon = styled.div`
  font-size: 20px;
`;

const HeaderAvatar = ({ nickName }) => {
  if (!nickName) {
    return (
      <div>
        Ingresa a Chat 
      </div>
    );
  }
  
  return (
    <div className="d-flex align-items-center pointer">
      <HeaderIcon>
        <i className="fas fa-user" />
      </HeaderIcon>
      <div className="ml-2 mt-1">{nickName}</div>
      <div className="ml-1">
        <i className="fas fa-sort-down" />
      </div>
    </div>
  );
}

const Header = ({ nickName }) => {
  return (
    <HeaderStyles>
      <HeaderAvatar nickName={nickName} />
    </HeaderStyles>
  );
}
  

export default Header;
