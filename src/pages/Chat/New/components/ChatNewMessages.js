import React from 'react';
import styled from 'styled-components';

const ChatMessages = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 400px;
`;

const ChatMessageItem = styled.div`
  background-color: white;
  max-width: 600px;
  margin: 0px auto;
  margin-top: 20px;
  padding: 10px 12px;
  border-bottom: 1px solid #F8F9FA;
`;

const ChatMessageText = styled.p`
  color: gray;
  padding: 0;
  margin-top: 10px
`;

const ChatNewMessageItem = () => (
  <ChatMessageItem>
    <div className="d-flex justify-content-between">
      <div className="text-primary">Yo</div>
      <div>20/10/2020</div>
    </div>
    <ChatMessageText>
      hola cómo estas?
    </ChatMessageText>
  </ChatMessageItem>
);

const ChatNewMessages = () => (
  <ChatMessages>
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />
    <ChatNewMessageItem />

    
  </ChatMessages>
);

export default ChatNewMessages;
