import React from 'react';
import RoomListItem from './RoomListItem';

const RoomList = () => (
  <div className="row ">
    <div className="col-md-12">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre de sala</th>
            <th>Usuarios</th>
            <th>Categoría</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <RoomListItem name="amantes de harry potter" category="Cine" membersAccount={22}/>
        </tbody>
      </table>
    </div>
  </div>
);

export default RoomList;
