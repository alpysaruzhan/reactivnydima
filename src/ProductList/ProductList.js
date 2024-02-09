import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import productsData from "./db.json";
import './ProductList.css';
import { MarketApi, ProductApi } from "market_place"
import { Instance, asFileUrl } from "../GateWay/base";

const ProductList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const [games, setGames] = useState([]);
  const [appsToShow, setAppsToShow] = useState([]);

  useEffect(() => {
    const market = new MarketApi(Instance)

    market.getGamesApiV1GameGet(
      {
        limit: 12,
        offset: 0,
      }, (error, data, response) => {
        if (error) {
          console.error(error)
        } else {
          console.log("GameGet", data)
          setGames(data.objects)
        }
      })


   


    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };


  }, [])


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let itemsPerRow;
  if (windowWidth >= 1600) {
    itemsPerRow = 6;
  } else if (windowWidth >= 1400) {
    itemsPerRow = 5;
  } else if (windowWidth <= 1000 && windowWidth >= 800) {
    itemsPerRow = 3;
  } else if (windowWidth <= 800) {
    itemsPerRow = 2.5;

  } else {
    itemsPerRow = 4;
  }

  let itemsPerRow2;
  if (windowWidth >= 1600) {
    itemsPerRow2 = 4;
  } else if (windowWidth >= 1400) {
    itemsPerRow2 = 3;
  } else if (windowWidth <= 1000 && windowWidth >= 800) {
    itemsPerRow2 = 3;
  } else if (windowWidth <= 800) {
    itemsPerRow2 = 2.5;

  } else {
    itemsPerRow2 = 2;
  }

  const gamesToShow = games.slice(0, itemsPerRow * 2);
  return (
    <div className='co'>
      <div className='gm'>
        <div className='ProductList-block'>
          <h1 className='ProductList-tit'>Популярные игры</h1>
          <NavLink className='ProductList-allbutt' to={"/all/c1"}>
            <button className='game-button '>Все игры &#707;</button>
            <button className='game-button  game-button-mini'>&#707;</button>

          </NavLink>
        </div>
        <div className="under-block">
          <div className="product-list">
            {gamesToShow.map((game) => (
              game.type === 'GAME' ?
                <Link key={game.id} to={`/game/${game.id}`} className="product-card">
                  <img src={asFileUrl(game.logo.fileUrl)} alt={game.title} className="product-logo" />
                  <p className="product-name">{game.name}</p>
                </Link>
                : null
            ))}
          </div>
        </div>
      </div>
      <div className='ap'>
        <div className='ProductList-block'>
          <h1 className='ProductList-tit'>Приложения</h1>
          <NavLink className='ProductList-allbutt' to={"/all/c2"}>
            <button className='game-button'>Все приложения &#707;</button>
            <button className='game-button game-button-mini'> &#707;</button>
          </NavLink>
        </div>
        <div className="under-block">
          <div className="product-list">
            {gamesToShow.map((app) => (
              app.type === 'APPLICATION' ?
                <Link key={app.id} to={`/app/${app.id}`} className="product-card-app">
                  <img src={asFileUrl(app.logo.fileUrl)} alt={app.title} className="product-logo" />
                  <p className="product-name">{app.title}</p>
                </Link>
                : null
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductList;
