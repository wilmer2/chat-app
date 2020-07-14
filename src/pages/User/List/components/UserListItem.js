import React from 'react';
import styled from 'styled-components';

const UserItem = styled.div`
  background-color: white;

  border-bottom: .5px solid #F8F9FA;
  max-width: 600px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
`;

const UserListItem = ({ nickname }) => (
  <UserItem>
    <div>
      {nickname}
    </div>
    <button className="btn btn-success btn-sm">Conversar</button>
  </UserItem>
);

export default UserListItem;
