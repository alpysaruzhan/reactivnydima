import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../SellPage.css";

const Step6ContentPage = ({ handleStepChange }) => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    localStorage.setItem("productDescription", e.target.value);
  };

  return (
    <div className='sellall-con'>
      <div className='sel-h'>
      <h1 className='h-cat'  onClick={() => handleStepChange(4)} >&lt; Описание:</h1>

        <div className='inpu-name'>
          <textarea
            className='inpu-r'
            placeholder='Введите описание...'
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit" className='name-but' onClick={() => handleStepChange(6)}>
          Продолжить
        </button>
      </div>
    </div>
  );
}

export default Step6ContentPage;
