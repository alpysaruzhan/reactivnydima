import React, { useState } from "react";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import profileData from "../profile.json";
import "./ProfileReview.css";
import filt from "../../img/filtr.png";
import renderStars from "../../functions.js";
import OtzivComponent from "../../OtzivComponent/OtzivComponent.js";
import cardData from "../../card.json";

const ProfileReview = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const profile = profileData.profiles[0];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const cardsToShow = cardData.cards.slice(0, 10);
  const product = cardData.cards.find((card) => card.id === parseInt(1));

  const products = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
  ];

  return (
    <div className="containergalmjan">
      <div className="containeraman">
        <Link to={"/"} className="otzivview-nazad">
          <p className="otzivview-nazad-icon">&#706;</p>
          <p className="otzivview-nazad-name">Отзывы Дмитрий</p>
        </Link>

        <div className="otzivview-top2">
          <div className="otzivview-spisoktop">
            <div className="otzivview-nn">
              <h2 className="otzivview-rating">{product.rating}</h2>
              <div className="otzivview-top-right">
                <h2 className="otzivview-stars-little">{renderStars(product.rating)}</h2>
                <h2 className="otzivview-count"> {product.reviews} отзывов</h2>
              </div>
            </div>

            <h2 className="otzivview-text">
              Все отзывы оставлены после покупки товаров
            </h2>
          </div>

          <div className="otzivview-spisokmid">
            <h2 className="otzivview-stars">{renderStars(product.rating)}</h2>
            <h2 className="otzivview-spisok">{`Сначала новые ⬇`}</h2>
          </div>

          <div className="otzivview-buttons">
            <button className="otzivview-button">*</button>
            <button className="otzivview-button">Игра</button>
            <button className="otzivview-button">Категория</button>
            <button className="otzivview-button">Цена</button>
            <button className="otzivview-button">С текстом</button>
          </div>

        </div>

        <div className="sectionotzivamana">
          {products.map((product) => (
           <OtzivComponent product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileReview;
