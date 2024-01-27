import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../SellPage.css";

const Step8ContentPage = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        const serviceFee = value * 0.1; 
        const revenueFromSale = value * 0.9; 
        localStorage.setItem('serviceFee', serviceFee.toFixed(2));
        localStorage.setItem('revenueFromSale', revenueFromSale.toFixed(2));
    };

    return (
        <div className='sellall-con'>
            <div className='sel-h'>
                <h1 className='h-cat'>&lt; Сумма товара:</h1>
                <input
                    className='input-name'
                    type='number'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Link to={"/prodat"}>
                    <button type="submit" className='name-but'>Продолжить</button>
                </Link>
                <div>
                    <p>Сервисные сборы: {localStorage.getItem('serviceFee')}</p>
                    <p>Доход от продажи: {localStorage.getItem('revenueFromSale')}</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Step8ContentPage;
