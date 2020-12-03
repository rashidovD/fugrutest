import React from 'react';

const ViewHumanData = ({ detailsPersonData, handleChange }) => {
  return (
    <div>
      <p>
        Выбран пользователь:
        <b>{`${detailsPersonData.firstName} ${detailsPersonData.lastName}`}</b>
      </p>
      <p>
        Описание:<br />
        <textarea
          value={detailsPersonData.description}
          onChange={handleChange}
        />
      </p>
      <p>Адрес проживания: <b>{detailsPersonData.address.streetAddress}</b></p>
      <p>Город: <b>{detailsPersonData.address.city}</b></p>
      <p>Провинция/штат: <b>{detailsPersonData.address.state}</b></p>
      <p>Индекс: <b>{detailsPersonData.address.zip}</b></p>
    </div>
  );
};

export default ViewHumanData;