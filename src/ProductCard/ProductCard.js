import React from "react";
import cardData from "./card.json";
import { NavLink } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = () => {
  const cardsToShow = cardData.cards.slice(0, 12);

  return (
    <div className="alll">
      <div className="block">
        <h1 className="tit">Премиум товары</h1>
        <NavLink to={"/all"}>
          <button className="game-button3">Выставить свой товар &#707;</button>
        </NavLink>
      </div>
      <div className="card-list2">
        {cardsToShow.map((card) => (

          <div className="product-card2">
            <NavLink
              key={card.id}
              to={`/product/${card.id}`}
              className="product-card-link"
            >
              <div className="firstline-card">
                <img src={card.logo} alt={card.title} className="card-logo" />
                <div className="text-card">
                  <p className="product-name2">{card.title}</p>
                  <p className="card-category2">{card.category}</p>
                </div>
              </div>
              <img
                src={card.image}
                alt={card.title}
                className="product-logo1"
              />

              <div className="card-description">
                <p className="product-name3">{card.price} ₽</p>
                <p className="descrip-prod">{card.description} </p>
                <p className="product-name3">{card.rating}</p>
              </div>
            </NavLink>
          </div>

        ))}
      </div>
    </div>
  );
};

export default ProductCard;
