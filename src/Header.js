import React from "react";
import { NavLink } from "react-router-dom";
import image from "./img/image37.svg";

import "./Header.css";
import { TEMP_EMAIL_KEY } from "./GateWay/consts";
import { Cookies } from "react-cookie";

const Header = ({authorized}) => {
  console.log(authorized)

  return (
    <header className="header">
      <div className="mobile">
        <div></div>
      </div>
      {/* <div className="header-input">
        <p className="pi">
          <img className="re" src={image} alt="" />
          <input placeholder="Поиск игр в приложении" type="text" />
        </p>
      </div> */}
      <div>
        {!authorized ?  <div className="header-buttons">
        <NavLink to="/login/code" className="vhod">
          <button className="header-button1">Вход</button>
        </NavLink>
        <NavLink to="/login/code"className="registracia">
          <button className="header-button2">Регистрация</button>
        </NavLink>
      </div> : null}
      </div>
     
    </header>
  );
};

export default Header;
