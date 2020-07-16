import React from 'react';
import UserListItem from './UserListItem';

const UserList = () => (
  <div className="row mt-3 justify-content-center">
    <div className="col-md-6 mb-2 d-flex">
      <input  type="text" className="form-control" placeholder="Buscar usuario" />
      <button className="btn btn-primary ml-1">
        <i class="fas fa-search" />
      </button>
    </div>
    <div className="col-md-12 mt-2">
      <UserListItem  nickname="Richard" />
      <UserListItem  nickname="Kelly" />
    </div>
  </div>
);

export default UserList;
