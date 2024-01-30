import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthApi } from "market_place";
import whitegh from "../img/logowhit.png";
import gmail from "../img/Ellipse50.png";
import vk from "../img/Ellipse49.png";
import { Instance } from "../GateWay/base";
import "./Regcod.css";
import { TEMP_EMAIL_KEY } from "../GateWay/consts";

const Regcod = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  let apiInstance = new AuthApi(Instance);

  function Rest(event) {
    event.preventDefault();
    apiInstance.authRegisterWithTemporaryPasswordOptionsApiV1AuthRegisterEmailPost(
      email,
      email,
      (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          console.log(
            "API called that Galymzhan tupaia chmoshka tupoiiiiiiiiiiiiiii:",
            data
          );

          localStorage.setItem(TEMP_EMAIL_KEY, email);
          navigate("/login");
        }
      }
    );
  }

  return (
    <div className="regcod">
      <div className="login-cont">
        <div className="login-right">
          <div className="login-tit">
            <h3 className="log-title">Вход или регистрация</h3>
            <p className="log-p">
              Для входа в аккаунт или регистрации, мы пришлём временный код вам
              на e-mail:
            </p>
          </div>
          <div className="log-form">
            <form onSubmit={Rest}>
              <input
                className="log-input"
                type="email"
                placeholder="Введите ваш  email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="log-button" type="submit">
                Получить код
              </button>
            </form>
            <div className="soc">
              <Link to="/" className="log-link">
                <button type="submit" className="log-but">
                  <img className="svg" src={vk} alt="" />
                  Войти через VK
                </button>
              </Link>
              <Link to="/" className="log-link">
                <button type="submit" className="log-but">
                  <img className="svg" src={gmail} alt="" /> Войти через Gmail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regcod;
