import React from "react";
import { NavLink } from "react-router-dom";
import image from "./img/image37.svg";
import logowithout from "./img/logowithout.png";
import logo from "./img/logowhit.png";
import { TEMP_EMAIL_KEY } from "./GateWay/consts";
import { Cookies } from "react-cookie";
import "./Header.css";

const Header = ({ authorized }) => {

  console.log(authorized);

  return (
    <header>
      <div className="mobile">
        <div>
          <div className="logo">
          </div>
        </div>
      </div>
      <div>
        {!authorized ? (
          <div className="header-buttons">
            <NavLink to="/login/code" className="vhod">
              <button className="header-button1">Вход</button>
            </NavLink>
            <NavLink to="/login/code" className="registracia">
              <button className="header-button2">Регистрация</button>
            </NavLink>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
