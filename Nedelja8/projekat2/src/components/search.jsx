import React from 'react';
import UserList from './userList';

const Search = ({ handleSearchChange, data, text }) => {
  if (text === '') {
    return (
      <div className="search">
        <input type="text" placeholder="Search" onChange={handleSearchChange} />
      </div>
    )
  } else {
    return (
      <div className="search">
        <input type="text" placeholder="Search" onChange={handleSearchChange} />
        <UserList data={data} />
      </div>
    )
  }
}

export default Search;