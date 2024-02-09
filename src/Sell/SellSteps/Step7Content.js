import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../SellPage.css";

const Step7ContentPage = ({ handleStepChange }) => {
    const [textareaValue, setTextareaValue] = useState('');
    const handleTextareaChange = (e) => {
        const value = e.target.value;
        setTextareaValue(value);
        localStorage.setItem("productTextareaValue", value);
    };

    return (
        <div className='sellall-con'>
            <div className='sel-hh'>
            <h1 className='h-cat'  onClick={() => handleStepChange(6)} >&lt; Данные товара:</h1>

                <div className='inpu-name'>
                    <textarea
                        className='inpu-r'
                        placeholder='Здравствуйте!'
                        value={textareaValue}
                        onChange={handleTextareaChange}
                    />
                </div>
                <button onClick={() => handleStepChange(7)} type="submit" className='name-but'>Продолжить</button>
                <div>
                    <Link className="link-sec">🔒 Безопасность сделки</Link>
                </div>
                <h1 className='h-cat'>Условие продажи:</h1>
                <p className='p-ca'>• Когда покупатель оплатил товар, средства заморожены на стороне Playerok. Вы получите оплату после того, как выполните заказ, покупатель проверит товар и подтвердит получение. <br />
                • Покупатель ознакомится с данными товара, которые вы указали при выставлении товара. <br />
                • Свяжитесь с покупателем в чате, если необходима дополнительная информация для выполнения заказа. <br />
                • Выполните заказ: передайте товар покупателю, и нажмите кнопку «Я выполнил». <br />
                • Покупатель проверит товар. У покупателя есть 7 дней на проверку и подтверждение товара.</p>
            </div>
        </div>
    );
}

export default Step7ContentPage;
