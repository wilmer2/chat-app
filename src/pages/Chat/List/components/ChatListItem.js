import React from 'react';
import styled from 'styled-components';

const ChatItem = styled.div`
  background-color: white;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid #F8F9FA;
  padding: 10px 16px;
  cursor: pointer;
`;

const ChatLastMessage = styled.p`
  color: gray;
  padding: 0;
`;

const ChatListItem = () => (
  <ChatItem>
    <div className="d-flex justify-content-between">
      <div>Richard</div>
      <div>10/08/2020</div>
    </div>
    <ChatLastMessage>
      vamos a ver el patido o que rata, si o quequas?
    </ChatLastMessage>
  </ChatItem>
);

export default ChatListItem;
