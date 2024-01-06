import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./img/logowhit.png";
import home from "./img/home.svg";
import vector from "./img/Vector.svg";
import pro from "./img/pro.svg";
import chat from "./img/chat.svg";
import garant from "./img/garant.svg";
import logowithout from "./img/logowithout.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <div className="logo">
        <img className="logo-img" src={logo} alt="" />
        <img className="logo-img2" src={logowithout} alt="" />
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li className="active">
            <NavLink to="/" activeClassName="active">
              <img className="svg" src={home} alt="" />
              <p>Главапвапппапвная</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              <img className="svg" src={vector} alt="" />
              <p>Профиль</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sell" activeClassName="active">
              <img className="svg" src={pro} alt="" />
              <p>Продать</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat" activeClassName="active">
              <img className="svg" src={chat} alt="" />
              <p>Чаты</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/guarantee" activeClassName="active">
              <img className="svg" src={garant} alt="" />
              <p>Гарантия</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>


    <div className='mobile-sidebar'>
        <ul className="mobile-navbar-menu-list">
          <li className="active">
            <NavLink className="blo" to="/" activeClassName="active">
              <img className="svg" src={home} alt="" />
              <p>Главная</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="blo" to="/profile" activeClassName="active">
              <img className="svg" src={vector} alt="" />
              <p>Профиль</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="blo" to="/sell" activeClassName="active">
              <img className="svg" src={pro} alt="" />
              <p>Продать</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="blo" to="/chat" activeClassName="active">
              <img className="svg" src={chat} alt="" />
              <p>Чаты</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="blo" to="/guarantee" activeClassName="active">
              <img className="svg" src={garant} alt="" />
              <p>Гарантия</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
