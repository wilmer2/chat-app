import React from 'react';


const RoomListItem = ({ category, membersAccount, name }) => (
  <tr>
    <td>{name}</td>
    <td>{membersAccount}</td>
    <td>{category}</td>
    <td>
      <button className="btn btn-primary btn-sm">Unirse</button>
    </td>
  </tr>
);

export default RoomListItem;
