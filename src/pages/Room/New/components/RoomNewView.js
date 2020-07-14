import React from 'react';
import RoomNewForm from './RoomNewForm';

const RoomNewView = () => (
  <div className="container">
    <h1 className="text-center mt-5">Registrar sala</h1>
      <div className="row justify-content-center mt-4">
        <RoomNewForm />
      </div>
  </div>  
);

export default RoomNewView;
