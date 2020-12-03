import React from 'react';

const Table = ({data, handleClickSort, sort, sortField, onRowSelect}) => {
  console.log(sort);
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={handleClickSort.bind(null, 'id')}>
            id {sortField === 'id' ?
              <small>
                {sort === 'asc' ? <b>&#9650;</b> : <b>&#9660;</b>}
              </small> : <small><b>&#9660;</b></small>}
          </th>
          <th onClick={handleClickSort.bind(null, 'firstName')}>
            firstName {sortField === 'firstName' ?
              <small>
                {sort === 'asc' ? <b>&#9650;</b> : <b>&#9660;</b>}
              </small> : <small><b>&#9660;</b></small>}
          </th>
          <th onClick={handleClickSort.bind(null, 'lastName')}>
            lastName {sortField === 'lastName' ?
              <small>
                {sort === 'asc' ? <b>&#9650;</b> : <b>&#9660;</b>}
              </small> : <small><b>&#9660;</b></small>}
          </th>
          <th onClick={handleClickSort.bind(null, 'email')}>
            email {sortField === 'email' ?
              <small>
                {sort === 'asc' ? <b>&#9650;</b> : <b>&#9660;</b>}
              </small> : <small><b>&#9660;</b></small>}
          </th>
          <th onClick={handleClickSort.bind(null, 'phone')}>
            phone {sortField === 'phone' ?
              <small>
                {sort === 'asc' ? <b>&#9650;</b> : <b>&#9660;</b>}
              </small> : <small><b>&#9660;</b></small>}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((unit) => (
          <tr key={unit.id + unit.phone} onClick={onRowSelect.bind(null, unit)}>
            <td>{unit.id}</td>
            <td>{unit.firstName}</td>
            <td>{unit.lastName}</td>
            <td>{unit.email}</td>
            <td>{unit.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
