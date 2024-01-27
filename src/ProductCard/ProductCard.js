import React from "react";
import cardData from "../card.json";
import { NavLink } from "react-router-dom";
import "./ProductCard.css";
import ProductComponent from '../ProductComponent/ProductComponent';

const ProductCard = () => {
  const cardsToShow = cardData.cards.slice(0, 12);

  return (
    <div className="alll">
      <div className="ProductList-block">
        <h1 className="ProductList-tit">Премиум товары</h1>
        <NavLink to={"/all"}>
          <button className="game-button3">Выставить свой товар &#707;</button>
        </NavLink>
      </div>
      <div className="card-list2">
        {cardsToShow.map((card) => (
          <ProductComponent card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
