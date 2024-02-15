import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from "../ProductList/db.json";
import "./AppDetailPage.css"
import cardData from "../card.json";
import { NavLink } from "react-router-dom";
import { CategoryApi, MarketApi } from 'market_place';
import { Instance } from '../GateWay/base';
import {asFileUrl} from "../GateWay/base";
import ProductComponent from '../ProductComponent/ProductComponent';

const AppDetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState([])

  // const cardsToShow = ;
  const [categoriesNames, setCategoriesName] = useState([]);
  const [currCategory, setCurrCategory] = useState([]);
  const [cardsToShow, setCardsToShow] = useState([]);
  //
  // let cardsToShow = [];
  useEffect(() => {
    const market = new MarketApi(Instance)
    market.getGameApiV1GameGameIdGet(id, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        console.log("MarketApi", data)

        setGame(data)

        let names = []
        data.categories.forEach((value) => {
          names.push(value.name)
        })
        setCategoriesName(names)

        setCurrCategory(names[0])
      }
    })
  }, [])

  useEffect(() => {

    if (currCategory.length !== 0) {
      const category = new CategoryApi(Instance)
      category.categoryGetCategoryProductsApiV1CategoryCategoryNameGet(currCategory, (error, data, response) => {
        if (error) {
          console.error(error)
        } else {
          console.log("CategoryApi", data.objects)
          //setCurrCategory(data.objects[0])
          setCardsToShow(data.objects)
          console.log("cardsToShow", cardsToShow);
        }
      })
      console.log("currCategory", currCategory);
    }

  }, [currCategory])


  return (
    <div className="maindiv">
      <div className="game-detail">
        {game === undefined ? <h1>sadssa</h1> : <>
          <img src={game === undefined ? asFileUrl(game.logo.fileUrl) : null} alt={game.name} className="game-banner" />
          <div className='overlay'>
            <img src={game === undefined ? asFileUrl(game.banner.fileUrl) : null} alt={game.name} className='overlay-img' />
            <h2 className='overlay-text'> {game.name}</h2>
          </div>
        </>}


      </div>
      <div className="some-bar">
        {categoriesNames.map((category) =>
          <div key={category} className={`product-category ${currCategory == category ? 'category-active' : ''}  `} onClick={() => (setCurrCategory(category))} >
            <h4>{category}</h4>
          </div>)}
           {categoriesNames.map((category) =>
          <div key={category} className={`product-category ${currCategory == category ? 'category-active' : ''}  `} onClick={() => (setCurrCategory(category))} >
            <h4>{category}</h4>
          </div>)}
      </div>
      <div className="card-list2">
        {(cardsToShow.length > 0) ? cardsToShow.map((card) => (
          <ProductComponent card={card} />

          // <div className="product-card2" key={card.id}>
          //   <NavLink

          //     to={`/product/${card.id}`}
          //     className="product-card-link"
          //   >

          //     <div className="firstline-card">
          //       <img src={asFileUrl(card.photos[0].fileUrl)} alt={card.text} className="card-logo" />
          //       <div className="text-card">
          //         <p className="card-category2">{card.category.name}</p>
          //       </div>
          //     </div>
          //     <img
          //       src={asFileUrl(card.photos[0].fileUrl)}
          //       alt={card.title}
          //       className="product-logo1"
          //     />

          //     <div className="card-description">
          //       <p className="product-name3">{card.basePrice.amount} {card.basePrice.currency}</p>
          //       <p className="descrip-prod">{card.text} </p>
          //       <p className="product-name3">{card.rating}</p>
          //     </div>
          //   </NavLink>
          // </div>
        )):
        <h1>ПУСТО</h1>}
      </div>

      <button className='showmore-button'>Показать еще</button>
    </div>


  );
};

export default AppDetailPage;
