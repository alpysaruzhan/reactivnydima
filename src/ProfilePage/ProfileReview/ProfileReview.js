import React, { useState } from "react";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import profileData from "../profile.json";
import "./ProfileReview.css";
import filt from "../../img/filtr.png";
import renderStars from "../../functions.js";
import cardData from "../../ProductCard/card.json";

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
        <Link to={"/"} className="nazad">
          <p className="nazad-icon">&#706;</p>
          <p className="nazad-name">{product.title}</p>
        </Link>

        <div className="otziv-top2">
          <div className="otziv-spisoktop">
            <div className="otziv-nn">
              <h2 className="otziv-rating">{product.rating}</h2>
              <div className="otziv-top-right">
                <h2>{renderStars(product.rating)}</h2>
                <h2 className="otziv-count"> {product.reviews} отзывов</h2>
              </div>
            </div>

            <h2 className="otziv-text">
              Все отзывы оставлены после покупки товаров
            </h2>
          </div>

          <h2 className="otziv-spisok">{`Сначала новые > `}</h2>
        </div>

        <div className="sectionotzivamana">
          {products.map((product) => (
            <div className="otzivamana">
              <div className="otziv-header">
                <img
                  className="imggback"
                  src={product.logo}
                  alt={product.title}
                />
                <div className="otziv-header-center">
                  <h2>{product.title}</h2>
                  <h2>{renderStars(product.rating)}</h2>
                </div>
                <h2 className="otziv-date">12.34.21[32:24]</h2>
              </div>
              <div className="otziv-main">{product.opisaniye}</div>
              <div className="otziv-footer">
                <img
                  className="otziv-img"
                  src={product.image}
                  alt={product.title}
                />
                <div className="otziv-footer-right">
                  <h2 className="otziv-price">{product.price}$</h2>
                  <h2>123213 на ваш аканут</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileReview;
