import React from 'react';

const DataYearFilter = (props) => {
  let { handleChange } = props;
  let years = props.fillYears();

  return (
    <div class="year-filter">
      <span>Filter by year: </span>
      <select id="year-filter" onChange={handleChange}>
        {years.map(x => { return <option value={x}>{x}</option> })}
      </select>
    </div>
  );
}

export default DataYearFilter;