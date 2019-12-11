import React from 'react';
import Launch from './launch';

// Has attribute data which is used for display
const LaunchList = (props) => {
  let { data } = props;

  return (
    <launchlist className="l-list">
      {data.map(x => { return <Launch launch={x} key={x.flight_number} /> })}
    </launchlist>
  );
}

export default LaunchList;