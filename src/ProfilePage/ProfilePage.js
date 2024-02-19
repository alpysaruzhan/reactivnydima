import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import profileData from "./profile.json";
import "./ProfilePage.css";
import filt from "../img/filtr.png";
import renderStars from "../functions.js";
import ProductComponent from '../ProductComponent/ProductComponent';
import cardData from "../card.json";
import { AuthApi, ChatApi, WalletApi, UsersApi } from 'market_place';
import { Instance } from '../GateWay/base';
import { MarketApi } from "market_place"
import {asFileUrl} from "../GateWay/base";


const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const profile = profileData.profiles[0];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  //const cardsToShow = cardData.cards.slice(0, 12);
  const Users = new UsersApi(Instance);
  const Wallet = new WalletApi(Instance);

  const [userData, setUserData] = useState([]);
  const [usetWalet, setUsetWalet] = useState([]);

  useEffect(() => {
    
    Users.usersCurrentUserApiV1UsersMeGet((error, data, response)=>{
      if (error) {
        console.error(error);
      } else {
        setUserData(data)
        console.log("Fetched messages jopa:", data);
      }
    })

    Wallet.getUserWalletApiV1WalletGet((error, data, response)=>{
      if (error) {
        console.error(error);
      } else {
        setUsetWalet(data)
        console.log("Fetched messages popa:", data);
      }
    })  
    
  }, [])
  
   
  const [cardsToShow, setCardsToShow] = useState([]); 


  useEffect(() => {
    const market = new MarketApi(Instance)

    market.getUserProductsApiV1ProductUserGet(
      {

        
      }, (error, data, response) => { 
      if (error) { 
        console.error(error)
      } else { 
        console.log("data",data)
        // setCardsToShow(data.objects)
      }
    })
  }, [])


  return (
    <div className="cont2">
      <div className="first">
        <img className="profile-img" src={userData.avatar ? asFileUrl(userData.avatar.fileUrl) : "https://www.pinclipart.com/picdir/big/332-3324748_confused-person-clipart.png"} alt="Профиль" />

        <div className="left-prof">
          <p className="nickname">{userData.username}</p>
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
              <p className="bal-prof"> {usetWalet.available}₽</p>
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
            className={` ${"tab1" === activeTab ? 'activeeee' : 'butt45'} `}
            onClick={() => handleTabClick("tab1")}
          >
            Мой товары
          </button>
          <button
            className={` ${"tab2" === activeTab ? 'activeeee' : 'butt45'} `}
            onClick={() => handleTabClick("tab2")}
          >
            Покупки
          </button>
          <button
            className={` ${"tab3" === activeTab ? 'activeeee' : 'butt45'} `}
            onClick={() => handleTabClick("tab3")}
          >
            Продажи
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && (
             <div className="card-list2">
             {cardsToShow.map((card) => (
               <ProductComponent card={card} />
             ))}
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
