import React, { useState, useEffect } from 'react';
import DataYearFilter from './data-year-filter';
import LaunchList from './launch-list';
import { fillFutureYearsToArray } from '../utility/date-utility';
import { getUpcomingLaunches } from '../utility/space-x-service';

const UpcomingLList = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    getUpcomingLaunches()
      .then(data => {
        setData(data);
        setDisplayData(data);
      })
  }, []);

  const handleChange = (e) => {
    console.log('Hello');
    console.log(e.target.value);
    setDisplayData(data.filter(x => x.launch_year === e.target.value));
  }

  return (
    <>
      <DataYearFilter handleChange={handleChange} fillYears={fillFutureYearsToArray} />
      <LaunchList data={displayData} />
    </>
  );
}

export default UpcomingLList;