import React from 'react';
import "./SellPage.css";
import { Link } from 'react-router-dom';

const SellPage = () => {
  return (
    <div className='cont8'>
      <h2 className='hh'>Перед тем как <br></br> приступить к продаже:</h2>
      <div className='divsa'>
        <div className='greensel'></div>
        <div className='redsel'></div>
      </div>
      <div>
        <Link to={"/policy"}>
          <p className='p-sel'>Нажимая «Начать продажу», Вы принимаете Условия продажи</p>
        </Link>
        <Link to={"/sellall"}>
        <button type="submit" className='sell-bbu'>Приступить к продаже</button>
        </Link>
      </div>
    </div>
  );
}

export default SellPage;
