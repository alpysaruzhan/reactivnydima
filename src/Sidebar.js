import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logowhit.png";
import home from "./img/home.svg";
import vector from "./img/Vector.svg";
import pro from "./img/pro.svg";
import chat from "./img/chat.svg";
import garant from "./img/garant.svg";
import logowithout from "./img/logowithout.png";


import garant_mobile from "./img/Frame 1.png";
import vector_mobile from "./img/Frame 4.png";
import pro_mobile from "./img/122121212222.png";
import chat_mobile from "./img/Frame 2.png";
import home_mobile from "./img/Frame 5.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="navbar-menu">
          <ul className="navbar-menu-list">
            <li></li>
            <li className="li">
              <NavLink to="/home" className="NavLink">
                <div className="svg-div">
                  <img className="svg" src={home} alt="" />
                </div>
                <p>Главная</p>
              </NavLink>
            </li>
            <li className="li1">
              <NavLink to="/profile" className="NavLink">
                <div className="svg-div">
                  <img className="svg" src={vector} alt="" />
                </div>
                <p>Профиль</p>
              </NavLink>
            </li>
            <li className="li">
              <NavLink to="/sell" className="NavLink">
                <div className="svg-div">
                  <img className="svg" src={pro} alt="" />
                </div>
                <p>Продать</p>
              </NavLink>
            </li>
            <li className="li">
              <NavLink to="/chat" className="NavLink">
                <div className="svg-div">
                  <img className="svg" src={chat} alt="" />
                </div>
                <p>Чаты</p>
              </NavLink>
            </li>
            <li className="li">
              <NavLink to="/guarantee" className="NavLink">
                <div className="svg-div">
                  <img className="svg" src={garant} alt="" />
                </div>
                <p>Гарантия</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile-sidebar">
        <ul className="mobile-navbar-menu-list">
          <li className="active">
            <NavLink className="blo" to="/" activeClassName="active-mobile">
              <img className="svg" src={home_mobile} alt="" />
              <p>Главная</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="blo"
              to="/profile"
              activeClassName="active-mobile"
            >
              <img className="svg" src={vector_mobile} alt="" />
              <p>Профиль</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="blo" to="/sell" activeClassName="active-mobile">
              <img className="svg" src={pro_mobile} alt="" />
              <p>Продать</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="blo" to="/chat" activeClassName="active-mobile">
              <img className="svg" src={chat_mobile} alt="" />
              <p>Чаты</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="blo"
              to="/guarantee"
              activeClassName="active-mobile"
            >
              <img className="svg" src={garant_mobile} alt="" />
              <p>Гарантия</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
