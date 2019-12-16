import React, { useState } from 'react';
import Form from '../components/form';
import UserList from '../components/userList';
import Search from '../components/search';

const Content = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState([{ name: 'Nikola Mihajlovic', number: '+123 123456789' }]);
  const [noName, setNoName] = useState({});
  const [noNumber, setNoNumber] = useState({});
  const [wrongFormat, setWrongFormat] = useState({});
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([{ name: '', number: '' }]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }

  const handleSubmit = () => {
    if (name === '') {
      setNoName({ display: "block" });
      return;
    } else if (number === '') {
      setNoNumber({ display: "block" });
      return;
    } else if (!/^[+]\d{3}\s\d{9}$/.test(number)) {
      setWrongFormat({ display: "block" });
      return;
    }

    setNoName({ display: "none" });
    setNoNumber({ display: "none" });
    setWrongFormat({ display: "none" });
    let match = data.find(el => el.name === name);
    if (match) {
      if (window.confirm('Contact already exists, do you want to update it?')) {
        console.log(data.indexOf(match));
        let arr = [...data];
        arr[arr.indexOf(match)].number = number;
        setData(arr);
      }
    } else {
      let arr = [...data];
      arr.push({ name: name, number: number });
      setData(arr);
    }
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    let regex = new RegExp(e.target.value);
    setSearchData(data.filter(el => regex.test(el.name)));
  }

  return (
    <>
      <Form handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} noName={noName} noNumber={noNumber} wrongFormat={wrongFormat} />
      <Search handleSearchChange={handleSearchChange} data={searchData} text={search} />
      <br />
      <UserList data={data} />
    </>
  )
}

export default Content;