import React from 'react';

const RoomNewForm = () => (
  <div className="col-md-6">
    <form>
      <div className="form-group">
        <label htmlFor="groupName">Nombre de sala</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Nombre de sala" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Categoría</label>
        <select className="form-control" id="category" name="category">
          <option>Seleccione categoría</option>
          <option>Cine</option>
          <option>Deporte</option>
          <option>Música</option>
          <option>Otro</option>
        </select>
      </div>
      <button className="btn btn-primary">Guardar</button>
    </form>
  </div>
);

export default RoomNewForm;
