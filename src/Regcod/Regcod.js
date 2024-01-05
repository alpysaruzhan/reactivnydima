import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthApi } from 'market_place';
import whitegh from "../img/logowhit.png";
import gmail from "../img/Ellipse50.png";
import vk from "../img/Ellipse49.png";
import { Instance } from "../GateWay/base";
import "./Regcod.css";
import { TEMP_EMAIL_KEY } from '../GateWay/consts';

const Regcod = () => {
    const [email, setEmail] = useState('');
    let apiInstance = new AuthApi(Instance);

    function Rest(event) {
        event.preventDefault(); 
        apiInstance.registerWithTemporaryPasswordApiV1AuthRegisterEmailPost(email, email, (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called that Arhuzhan tupaia:', data);
                
                // Save email in local storage
                localStorage.setItem(TEMP_EMAIL_KEY, email);

                // Redirect to the page for entering the 6-digit code
            }
        });
    }

    return (
        <div className='regcod'>
            <div className='login-cont'>
                <div className='login-right'>
                    <div className='login-tit'>
                        <h3 className='log-title'>Вход или регистрация</h3>
                        <p className='log-p'>Для входа в аккаунт или регистрации, мы пришлём временный код вам на e-mail:</p>
                    </div>
                    <div className='log-form'>
                        <form onSubmit={Rest}>
                            <input
                                className='log-input'
                                type="email"
                                placeholder="Введите ваш  email:"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {/* <Link to="/login"> TODO: Как то сделать так что бы переходила только при сабмите */}
                            <button className='log-button' type="submit">Получить код</button>
                            {/* </Link> */}
                        </form>
                        <div className='soc'>
                            <Link to="/">
                                <button className='log-but1' type="submit"><img className="svg" src={vk} alt="" /> Войти через VK</button>
                            </Link>
                            <Link to="/">
                                <button className='log-but' type="submit"> <img className="svg" src={gmail} alt="" /> Войти через Gmail</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Regcod;
