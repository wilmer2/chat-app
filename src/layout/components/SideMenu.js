import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideMenuContainer = styled.div`
  min-height: 918px;
  width: 200px;
  border-right: 2px solid gray;
  
  box-sizing: border-box;
`;

const SideMenuItemContainer = styled.div`
  transition: .3s;
  &:hover {
    background-color: #f4f4f5;
  }
`;

const SideMenuItem = styled.div`
  padding: 10px 0;
  color: black;
`;
const SideMenu = () => (
  <SideMenuContainer className="pt-5">
    <SideMenuItemContainer className="mt-1">
      <Link to="/rooms">
        <SideMenuItem className="d-flex align-items-center ml-3">
          <i className="fab fa-chromecast" />
          <div className="ml-2">Salas</div>
        </SideMenuItem>
      </Link>
    </SideMenuItemContainer>
    <SideMenuItemContainer className="mt-1">
      <Link to="/users">
        <SideMenuItem className="d-flex align-items-center ml-3">
        <i class="far fa-user" />
          <div className="ml-2">Usuarios</div>
        </SideMenuItem>
      </Link>
    </SideMenuItemContainer>
    <SideMenuItemContainer className="mt-1">
      <Link to="/chats">
        <SideMenuItem className="d-flex align-items-center ml-3">
          <i class="far fa-comments" />
          <div className="ml-2">Chats</div>
        </SideMenuItem>
      </Link>
    </SideMenuItemContainer>
  </SideMenuContainer>
);

export default SideMenu;
