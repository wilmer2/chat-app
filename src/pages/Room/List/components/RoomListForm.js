import React from 'react';

const RoomListForm = () => (
  <form className="mt-5">
    <div className="row  justify-content-between">
        <div className="col-md-6">
          <div className="form-group">
            <select className="form-control" id="category" name="category">
              <option>Categoría</option>
              <option>Cine</option>
              <option>Música</option>
              <option>Deporte</option>
              <option>Otros</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div className="d-flex">
              <input 
                className="form-control" 
                placeholder="Buscar por nombre de grupo" 
                type="text" 
                name="nameGroup"
                id="nameGroup"
              />
              <button className="btn btn-primary ml-1">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
    </div>
  </form>
);

export default RoomListForm;
