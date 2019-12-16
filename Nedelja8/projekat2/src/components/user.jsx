import React from 'react';

const User = ({ data: { name, number } }) => {
  return (
    <div className="user">
      <span>{name}</span>
      <span>{number}</span>
    </div>
  )
}

export default User;