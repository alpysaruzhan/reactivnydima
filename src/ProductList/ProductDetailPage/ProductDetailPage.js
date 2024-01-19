import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from "../db.json";
import "./ProductDetailPage.css"
import cardData from "../../ProductCard/card.json";
import { NavLink } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const gam = productsData.games.find((game) => game.id === parseInt(id));
  // const cardsToShow = ;
  const categories = ["speelfe", "mr. kriper", "amankiler"];
  const [currCategory, setCurrCategory] = useState([]);
  const [cardsToShow, setCardsToShow] = useState(cardData.cards.slice(0, currCategory.length));
    //
  
  useEffect(() => {
  
    setCardsToShow( cardData.cards.slice(0, currCategory.length))
  }, [currCategory])
  
  return (
    <div className="maindiv">
      <div className="game-detail">
        <img src={gam.bannerURL} alt={gam.title} className="game-banner" />
        <div className='overlay'>
          <img src={gam.logoURL} alt={gam.title} className='overlay-img' />
          <h2 className='overlay-text'> {gam.title}</h2>
        </div>

      </div>
      <div className="some-bar">
        {categories.map((category) =>
          <div className={`product-category ${currCategory == category ? 'category-active' : ''}  `} onClick={() => (setCurrCategory(category))} > 
            <h4>{category}</h4>
          </div>)}
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

      <button className='showmore-button'>Показать еще</button>
    </div>


  );
};

export default ProductDetailPage;
