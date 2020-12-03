import React from 'react';

const SearchPerson = (props) => {

  const [value, setValue] = React.useState('');

  const changeInputValue = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          onClick={() => props.onSearch(value)}
        >
          Поиск
        </button>
      </div>
      <input
        type="text"
        value={value}
        onChange={changeInputValue}
        className="form-control"
      />
    </div>
  );
};

export default SearchPerson;
