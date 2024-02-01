import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from "../db.json";
import "./ProductDetailPage.css"
import cardData from "../../card.json";
import { NavLink } from "react-router-dom";
import { CategoryApi, MarketApi } from 'market_place';
import { Instance } from '../../GateWay/base';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState([])

  // const cardsToShow = ;
  const [categoriesNames, setCategoriesName] = useState([]);
  const [currCategory, setCurrCategory] = useState([]);
  const [cardsToShow, setCardsToShow] = useState([]);
    //

  useEffect(() => {
    const market = new MarketApi(Instance)
    const category = new CategoryApi(Instance)
    market.getGameApiV1GameGameIdGet(id, (error, data, response) => { 
      if (error) { 
        console.error(error)
      } else { 
        setGame(data)
        let names = []
        data.categories.forEach((value) => { 
          names.push(value.name)
        })
        setCategoriesName(names)
        console.log(data)
      }
    })
    category.categoryGetCategoryProductsApiV1CategoryCategoryNameGet(currCategory, (error, data, response) => { 
      if (error) { 
        console.error(error)
      } else { 
        console.log(data)
        setCardsToShow(data.objects)
      }
    }) 
  }, [currCategory, id])
  
  return (
    <div className="maindiv">
      <div className="game-detail">
      {game === undefined ?  <h1>sadssa</h1> : <><img src={game === undefined ?  game.logo.fileUrl : null } alt={game.name} className="game-banner" />
        <div className='overlay'>
          <img src={game === undefined ? game.logo.fileUrl : null} alt={game.name} className='overlay-img' />
          <h2 className='overlay-text'> {game.name}</h2>
        </div></>}
        

      </div>
      <div className="some-bar">
        {categoriesNames.map((category) =>
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
