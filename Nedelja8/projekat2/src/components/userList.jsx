import React from 'react';
import User from './user';

const UserList = ({ data }) => {
  return (
    <userlist className="user-list">
      {data.map(user => {
        return <User data={user} />
      })}
    </userlist>
  );
}

export default UserList;