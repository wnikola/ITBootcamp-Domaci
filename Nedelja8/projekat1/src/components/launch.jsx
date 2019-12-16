import React from 'react';
import getSerbianDate from '../utility/date-utility';

// Has attribute launch which has info about launch
const Launch = (props) => {
  let { launch } = props;
  let { mission_name: m_name, launch_year: l_year, launch_date_unix: l_date, rocket: { rocket_name: r_name }, links: { mission_patch: m_patch } } = launch;

  if (m_patch == null) {
    m_patch = 'https://www.spaceflightinsider.com/wp-content/uploads/2014/06/1389029419000-space-x-logo-647x485.jpg';
  }

  let date = new Date(l_date * 1000);

  return (
    <launch className="launch">
      <label>{m_name}</label>
      <img src={m_patch} className="mission_logo" alt="Mission logo" />
      <label>{getSerbianDate(date)}</label>
      <label>{r_name}</label>
    </launch>
  );
}

export default Launch;