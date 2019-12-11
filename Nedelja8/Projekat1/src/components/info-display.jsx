import React, { useState, useEffect } from 'react';
import { getInfo } from '../utility/space-x-service';

const InfoDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getInfo()
      .then(data => setData(data));
  }, [])

  let { name, founder, founded, summary } = data;

  return (
    <>
      <h1>{name}</h1>
      <br />
      <h3>{founder}, {founded}</h3>
      <br />
      <span className="summary">{summary}</span>
    </>
  )
}

export default InfoDisplay;