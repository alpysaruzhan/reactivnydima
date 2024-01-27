import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../SellPage.css";

const Step6ContentPage = () => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/prod-info";
  };

  return (
    <div className='sellall-con'>
      <div className='sel-h'>
        <h1 className='h-cat'>&lt; Описание:</h1>
        <div className='inpu-name'>
          <textarea
            className='inpu-r'
            placeholder='Введите описание...'
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit" className='name-but' onClick={handleSubmit}>
          Продолжить
        </button>
      </div>
    </div>
  );
}

export default Step6ContentPage;
