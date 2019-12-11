import React, { useState, useEffect } from 'react';
import { getRoadsterInfo } from '../utility/space-x-service';

const Roadster = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRoadsterInfo()
      .then(data => setData(data));
  }, []);

  let { name, orbit_type, details } = data;

  return (
    <>
      <label>{name}</label>
      <br />
      <label>Orbit type: {orbit_type}</label>
      <br />
      <label>{details}</label>
    </>
  );
}

export default Roadster;