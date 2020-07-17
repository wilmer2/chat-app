import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import HeaderDropdown from './HeaderDropdown';

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

const HeaderAvatar = ({ nickName, onClickDropdown, wrapperRef, showDropdown }) => {
  if (!nickName) {
    return (
      <div>
        Ingresa a Chat 
      </div>
    );
  }
  
  return (
    <div 
      className="d-flex align-items-center pointer position-relative" 
      onClick={onClickDropdown}
      ref={wrapperRef}
    >
      <HeaderIcon>
        <i className="fas fa-user" />
      </HeaderIcon>
      <div className="ml-2 mt-1">{nickName}</div>
      <div className="ml-1">
        <i className="fas fa-sort-down" />
      </div>
      <HeaderDropdown showDropdown={showDropdown} />
    </div>
  );
}

const Header = ({ nickName }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClickDropdown = () => setShowDropdown(!showDropdown);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <HeaderStyles>
      <HeaderAvatar 
        nickName={nickName} 
        wrapperRef={wrapperRef} 
        onClickDropdown={handleClickDropdown} 
        showDropdown={showDropdown}
      />
    </HeaderStyles>
  );
}
  

export default Header;
