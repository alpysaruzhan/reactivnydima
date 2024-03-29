import React from "react";
import cardData from "../card.json";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductCard.css";
import ProductComponent from '../ProductComponent/ProductComponent';
import { Instance } from "../GateWay/base";
import { MarketApi } from "market_place"

const ProductCard = () => {
  const [cardsToShow, setCardsToShow] = useState([]); 


  useEffect(() => {
    const market = new MarketApi(Instance)

    market.getProductsApiV1ProductGet(
      {
        start: 0, 
        end: 12, 
      }, (error, data, response) => { 
      if (error) { 
        console.error(error)
      } else { 
        console.log("getProduct", data)
        setCardsToShow(data.objects)
      }
    })
  }, [])

  return (
    <div className="alll">
     
      <div className="ProductList-block">
        <h1 className="ProductList-tit">Товары</h1>
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
