import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../SellPage.css";

const Step8ContentPage = () => {
    return (
        <div className='sellall-con'>
            <div className='sel-h'>
                <h1 className='h-cat'>&lt; Сумма товара:</h1>
                    <input className='input-name'type='number' />
                <Link to={"/prodat"}>
                    <button type="submit" className='name-but'>Продолжить</button>
                </Link>
                <div>
                    <p>Сервисные сборы</p>
                    <p>Доход от продажи</p>
                </div>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Step8ContentPage;

