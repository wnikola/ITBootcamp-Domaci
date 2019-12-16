import React from 'react';

const Form = ({ handleNameChange, handleNumberChange, handleSubmit, noName, noNumber, wrongFormat }) => {
  return (
    <div className="form">
      <input type="text" placeholder="Name" onChange={handleNameChange} />
      <span className="no-name" style={noName}>You must enter a name</span>
      <input type="text" placeholder="Phone number" onChange={handleNumberChange} />
      <span className="no-number" style={noNumber}>You must enter a number</span>
      <span className="wrong-format" style={wrongFormat}>The number must be in the +xxx xxxxxxxxx format</span>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form;