import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./Login.css";
import { useCookies } from 'react-cookie';
import gmail from "../img/Ellipse50.png";
import vk from "../img/Ellipse49.png";
import { Instance, isAuthorized, setToken } from '../GateWay/base';
import { AuthApi } from 'market_place';
import { TEMP_EMAIL_KEY } from '../GateWay/consts';


const Login = (props) => {

  const {cookiesList} = props;  

  const [tempPassword, setTempPassword] = useState('');
  const [cookies, setCookie] = useCookies(['access_token']);
  const email = localStorage.getItem(TEMP_EMAIL_KEY);
  let apiInstance = new AuthApi(Instance);

  function handleLogin(event) {
      event.preventDefault();
      if (email !== null) { 
        apiInstance.authJwtLoginApiV1AuthJwtLoginPost("", email, tempPassword, "", "", "", (error, data, response) => {
            if (error) {
                if (response.statusCode) {
                    // сказать то что код неправильный по красивому
                    console.error(error);   
                } else { 
                    console.error("Упс, произошла внутренная ошибка")
                }
            } else {
                // Как то перенаправить на афтер регистрацию!!
                setToken(data.access_token, setCookie)
                if (isAuthorized(cookiesList)) {  
                    return <Navigate to="/after-register/" />
                } 
            }
            
        });
    } else { 
        console.error("Сказать что вы не должны быть тут, или перенаправить на главную")
    }
  }

  return (
    <div className='login'>
        <div className='login-cont'>
                <div className='login-right'>
                    <div className='login-tit'>
                        <h3 className='log-title'>Подтверждение аккаунта</h3>
                        <p className='log-p'>Для входа в аккаунт или регистрации, мы пришлём <br />временный код вам на e-mail:</p>
                    </div>
                    <div className='log-form'>
                    <form>
                         <input className='log-input' type="email" placeholder="Введите 6 значный код" onInput={setTempPassword}/>
                         <Link to="/login/code">
                         <button onClick={handleLogin} className='log-button' type="submit">Проверить код</button>
                         </Link>
                         <div className='soc'>
                         <Link to="/">
                         <button className='log-but1' type="submit"><img className="svg" src={vk} alt="" /> Войти через VK</button>
                         </Link>
                         <Link to="/">
                         <button className='log-but' type="submit"> <img className="svg" src={gmail} alt="" /> Войти через Gmail</button>
                         </Link>
                         </div>
                    </form>
                    </div>
                </div>
                </div>
    </div>
  );
};

export default Login;
