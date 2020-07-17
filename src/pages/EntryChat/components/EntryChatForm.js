import React, { useState } from 'react';

const EntryChatForm = ({ handleSaveNickName, nickName }) => {
  const [nick, setNickName] = useState(nickName);

  const handleOnSubmit = e => {
    e.preventDefault();

    if (!nick) return;
    handleSaveNickName(nick);
  }

  const handleOnChange = e => setNickName(e.target.value);

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group d-flex mt-2">
        <input 
          type="text" 
          className="form-control" 
          id="nick"  
          placeholder="Ingresa tu nick"
          value={nick}
          onChange={handleOnChange}
        />
        <button className="btn btn-primary btn-sm ml-1">Guardar</button>
      </div>
    </form>
  );
}

export default EntryChatForm;
