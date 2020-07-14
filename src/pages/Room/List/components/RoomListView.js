import React from 'react';
import RoomListForm from './RoomListForm';
import RoomList from './RoomList';
import RoomListButton from './RoomListButton';

const RoomListView = () => (
  <section className="container">
    <h1 className="text-center mt-5">Salas de Chat</h1>
    <RoomListForm />
    <RoomListButton />
    <RoomList />
  </section>
);

export default RoomListView;
