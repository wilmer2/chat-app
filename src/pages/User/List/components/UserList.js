import React from 'react';
import UserListItem from './UserListItem';

const UserList = () => (
  <div className="row mt-3">
    <div className="col-md-12">
      <UserListItem  nickname="Richard" />
      <UserListItem  nickname="Kelly" />

    </div>
  </div>
);

export default UserList;
