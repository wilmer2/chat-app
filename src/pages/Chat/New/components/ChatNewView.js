import React from 'react';
import styled from 'styled-components';
import ChatNewMessages from './ChatNewMessages';
import ChatNewForm from './ChatNewForm';

const ChatNewWrapper = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
`;

const ChatNewView = () => (
  <ChatNewWrapper>
    <ChatNewMessages />
    <ChatNewForm />
  </ChatNewWrapper>
    
);

export default ChatNewView;
