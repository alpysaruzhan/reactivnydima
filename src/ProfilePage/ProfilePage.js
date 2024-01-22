import React, { useState } from "react";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import profileData from "./profile.json";
import "./ProfilePage.css";
import filt from "../img/filtr.png";
import renderStars from "../functions.js";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const profile = profileData.profiles[0];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="cont2">
      <div className="first">
        <img className="profile-img" src={profile.photo} alt="Профиль" />

        <div className="left-prof">
          <p className="nickname">{profile.nickname}</p>
          <div className="second-prof">
            <div className="rwe">
              <h2 className="rating-prof"> {profile.rating}</h2>
              <h2>{renderStars(profile.rating)}</h2>
            </div>
            <p className="prof-rev"> {profile.reviews} отзывов</p>
          </div>
        </div>
      </div>
      <div className="flpo">
        <div className="balance">
          <div className="bal">
            <div>
              <p className="balance-p">Баланс: </p>
            </div>
            <div>
              <p className="bal-prof"> {profile.balance}₽</p>
            </div>
          </div>
        </div>
        <div className="popol">
          <Link to="/balance">
            <button className="popp">Пополнить</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="tabs">
          <button
            className={`butt45 ${activeTab === "tab1" && "activeeee"}`}
            onClick={() => handleTabClick("tab1")}
          >
            Мой товары
          </button>
          <button
            className={`butt45 ${activeTab === "tab2" && "activeeee"}`}
            onClick={() => handleTabClick("tab2")}
          >
            Покупки
          </button>
          <button
            className={`butt45 ${activeTab === "tab3" && "activeeee"}`}
            onClick={() => handleTabClick("tab3")}
          >
            Продажи
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && (
            <div>
              <h2>Содержимое вкладки 1</h2>
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <h2>Содержимое вкладки 2</h2>
            </div>
          )}
          {activeTab === "tab3" && (
            <div>
              <h2>Содержимое вкладки 3</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
