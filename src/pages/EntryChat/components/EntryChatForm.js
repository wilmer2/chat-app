import React from 'react';

const EntryChatForm = () => (
  <form>
    <div className="form-group d-flex mt-2">
      <input type="text" className="form-control" id="nick"  placeholder="Ingresa tu nick" />
      <button className="btn btn-primary btn-sm ">Chatear</button>
    </div>
  </form>
);

export default EntryChatForm;
