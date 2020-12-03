import React from 'react';
import './ModeSelector.css';

const ModeSelector = (props) => {

  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  return (
    <div className="button__container">
      <button
        className="btn btn-success"
        onClick={() => props.onSelect(smallUrl)}
      >32 элемента</button>
      <button
        className="btn btn-danger"
        onClick={() => props.onSelect(bigUrl)}
      >1000 элементов</button>
    </div>
  )
}

export default ModeSelector;