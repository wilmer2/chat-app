import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Dropdown = styled.div`
  position: absolute;
  min-width: 160px;
  top: 32px;
  padding: 0;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: .3s;
`;

const DropdownItem = styled.div`
  color: black;
  padding: 10px 12px;
  border-bottom: 1px solid #F8F9FA;
`;

const DropdownKeyword = styled.span`
  color: black;
`;

const HeaderDropdown = ({ showDropdown }) => (
  <Dropdown className={!showDropdown ? 'd-none' : ''}>
    <DropdownItem>
      <Link to="/">
        <DropdownKeyword>
          Cambiar nick
        </DropdownKeyword>
      </Link>
    </DropdownItem>
    <DropdownItem>
      Cerrar sesión
    </DropdownItem>
  </Dropdown>
);

export default HeaderDropdown;
