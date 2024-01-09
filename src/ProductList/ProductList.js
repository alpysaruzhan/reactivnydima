import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import productsData from "./db.json";
import './ProductList.css';

const ProductList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const gamesToShow = productsData.games.slice(0, 10);
  const appsToShow = productsData.apps.slice(0, 6);

  return (
    <div className='co'>
      <div >
        <div className='block'>
          <h1 className='tit'>Популярные игры</h1>
          <NavLink to={"/all"}><button className='game-button'>Все игры &#707;</button></NavLink>
        </div>
        <div className="product-list">
          {gamesToShow.map((game) => (
            <Link key={game.id} to={`/game/${game.id}`} className="product-card">
              <img src={game.logoURL} alt={game.title} className="product-logo" />
              <p className="product-name">{game.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className='ap'>
        <div className='block'>
          <h1 className='tit'>Приложения</h1>
          <NavLink to={"/app"}><button className='game-button2'>10 &#707;</button></NavLink>
        </div>
        <div className="product-list">
          {appsToShow.map((app) => (
            <Link key={app.id} to={`/app/${app.id}`} className="product-card">
            <div key={app.id} className="product-card">
              <img src={app.logoURL} alt={app.title} className="product-logo" />
              <p className="product-name">{app.title}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
