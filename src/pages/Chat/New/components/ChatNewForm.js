import React from 'react';

const ChatNewForm = () => (
  <div className="row justify-content-center mt-4">
    <div className="col-md-8">
      <div className="form-group">
        <div className="d-flex">
          <input type="text" placeholder="Escribir mensaje" className="form-control" />
          <button className="btn btn-primary ml-1">Enviar</button>
        </div>
      </div>
    </div>
  </div>
);

export default ChatNewForm;
