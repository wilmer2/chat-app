import React from 'react';
import { Link } from 'react-router-dom';

const RoomListButton = () => (
  <div className="row mt-2">
    <div className="col-md-12">
      <Link to="/rooms/register" className="btn btn-link">Crear sala +</Link>
    </div>
  </div>
);

export default RoomListButton;
