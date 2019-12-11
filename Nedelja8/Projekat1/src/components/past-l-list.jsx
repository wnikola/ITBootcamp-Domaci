import React, { useState, useEffect } from 'react';
import LaunchList from './launch-list';
import DataYearFilter from './data-year-filter';
import { fillYearsToArray } from '../utility/date-utility';
import { getPastLaunches } from '../utility/space-x-service';

const PastLList = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    getPastLaunches()
      .then(data => {
        setData(data);
        setDisplayData(data);
      });
  }, []);

  const handleChange = (e) => {
    console.log('Hello');
    console.log(e.target.value);
    setDisplayData(data.filter(x => x.launch_year === e.target.value));
  }

  return (
    <>
      <DataYearFilter handleChange={handleChange} fillYears={fillYearsToArray} />
      <LaunchList data={displayData} />
    </>
  );
}

export default PastLList;