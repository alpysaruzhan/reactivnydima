import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useCookies } from "react-cookie";
import gmail from "../img/Ellipse50.png";
import vk from "../img/Ellipse49.png";
import { Instance, setToken } from '../GateWay/base';
import { AuthApi } from 'market_place';
import { AUTH_KEY, TEMP_EMAIL_KEY } from '../GateWay/consts';

const Login = (props) => {
  const { cookiesList } = props;

  const [tempPassword, setTempPassword] = useState('');
  const [cookies, setCookie] = useCookies([AUTH_KEY]);
  const navigate = useNavigate(); 
  const email = localStorage.getItem(TEMP_EMAIL_KEY);
  let apiInstance = new AuthApi(Instance);

  function handleLogin(event) {
    event.preventDefault();
      if (email !== null) { 
        apiInstance.authJwtLoginApiV1AuthJwtLoginPost("", email, tempPassword, "", "", "", (error, data, response) => {
            if (error) {
                console.error(error);   
            } else {
                // Как то перенаправить на афтер регистрацию!!
                setToken(data.accessToken, setCookie)
                
                setTimeout(() => navigate('/register'), 500)
            }
        }
      )
  }

  return (
    <div className="login">
      <div className="login-cont">
        <div className="login-right">
          <div className="login-tit">
            <h3 className="log-title">Подтверждение аккаунта</h3>
            <p className="log-p">
              Для входа в аккаунт или регистрации, мы пришлём <br />
              временный код вам на e-mail:
            </p>
          </div>
          <div className="log-form">
            <form>
              <input
                className="log-input"
                type="email"
                placeholder="Введите 6 значный код"
                onChange={(e) => setTempPassword(e.target.value)}
              />
              <Link to="/login/code">
                <button
                  onClick={handleLogin}
                  className="log-button"
                  type="submit"
                >
                  Проверить код
                </button>
              </Link>
              <div className="soc">
                <Link to="/"  className="log-but2">
                  <button type="submit" className="log-but">
                    <img className="svg" src={vk} alt="" /> Войти через VK
                  </button>
                </Link>
                <Link to="/" className="log-but2">
                  <button type="submit"  className="log-but" >
                    <img className="svg" src={gmail} alt="" />
                    Войти через Gmail
                  </button>
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
