import React from 'react';
import styled from 'styled-components';
import EntryChatForm from './EntryChatForm';
import Avatar from '../../../images/avatar.png';

const EntryChatImgContainer = styled.figure`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

const EntryChatImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const EntryChatView = () => (
  <div className="d-flex align-items-center justify-content-center">
    <div className='mt-5'>
      <EntryChatImgContainer>
        <EntryChatImg src={Avatar} alt="Avatar" />
      </EntryChatImgContainer>
      <EntryChatForm />
    </div>
  </div>
);

export default EntryChatView;
