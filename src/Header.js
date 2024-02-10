import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import image from "./img/image37.svg";
import logowithout from "./img/logowithout.png";
import logo from "./img/logowhit.png";
import { useState } from 'react';
import "./Header.css";
import { AUTH_KEY } from "./GateWay/consts";
import { useCookies } from "react-cookie";


const Header = ({ authorized }) => {
  console.log(authorized)
  const [cookies, setCookies, removeCookie] = useCookies([AUTH_KEY])
  const navigate = useNavigate(); 

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


        {!authorized ? <div className="header-buttons">
          <NavLink to="/login/code" className="vhod">
            <button className="header-button1">Вход</button>
          </NavLink>
          <NavLink to="/login/code" className="registracia">
            <button className="header-button2">Регистрация</button>
          </NavLink>
        </div> : <button onClick={()=>{
          removeCookie(AUTH_KEY);
          window.location.reload(false);
        }} className="header-button2">Выйти</button>
        }
      </div>

    </header>
  );
};

export default Header;
