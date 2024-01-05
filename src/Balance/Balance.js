import React, { useState } from 'react';
import "./Balance.css"

const BalancePage = () => {
  const [activeTab, setActiveTab] = useState('tab1'); 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [activeTab2, setActiveTab2] = useState('tab3'); 
  const handleTabClick2 = (tab) => {
    setActiveTab2(tab);
  };

  return (
    <div className='cont3'>
      <div>
        <div>
            <h2 className='balance-h'>Баланс</h2>
        </div>
        <div>
        <div className="tabs">
            <button className={activeTab === 'tab1' ? 'butt6 activeee' : 'butt6'} onClick={() => handleTabClick('tab1')}>Пополнение</button>
            <button className={activeTab === 'tab2' ? 'butt6 activeee' : 'butt6'} onClick={() => handleTabClick('tab2')}>Выплата</button>
        </div>

      <div className="tab-content">
        {activeTab === 'tab1' && (
          <div>
            <div className='swer'></div>
            <input className='swery' placeholder="Введите сумму" />
            <button className='balance-button' type="submit">Пополнить баланс</button>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div>
            <div className='swer'></div>
            <input className='swery' placeholder="Введите сумму" />
            <button className='balance-button' type="submit">Создать выплату</button>
          </div>
        )}
      </div>
    </div>
    </div>
    <div className='cont3'>
      <div>
        <div>
            <h2 className='balance-h'>История</h2>
        </div>
        <div>
      <div className="tabs">
          <button className='but-bln' onClick={() => handleTabClick2('tab3')}>Операция</button>
          <button className='but-bln' onClick={() => handleTabClick2('tab4')}>Сумма</button>
          <button className='but-bln' onClick={() => handleTabClick2('tab5')}>Способ</button>
          <button className='but-bln' onClick={() => handleTabClick2('tab6')}>Состояние</button>
      </div>
      <div className="tab-content">
        {activeTab2 === 'tab3' && (
          <div>
          </div>
        )}
        {activeTab2 === 'tab4' && (
          <div>
          </div>
        )}
        {activeTab2 === 'tab5' && (
          <div>
          </div>
        )}
        {activeTab2 === 'tab6' && (
          <div>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default BalancePage;