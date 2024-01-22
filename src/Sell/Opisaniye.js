import React from 'react';
import { Link } from 'react-router-dom';
import "./SellPage.css";

const OpisaniyePage = () => {
  return (
    <div className='sellall-con'>
      <div className='sel-h'>
        <h1 className='h-cat'>&lt; Описание:</h1>
        <div className='inpu-name'>
        <input className='inpu-r' placeholder='Здравствуйте!' /></div>
        <Link to={"/prod-info"}>
          <button type="submit" className='name-but'>Продолжить</button>
        </Link>
      </div>
    </div>
  );
}

export default OpisaniyePage;
