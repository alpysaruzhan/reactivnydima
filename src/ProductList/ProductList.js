import React, { useState, useEffect } from 'react';
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



  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let itemsPerRow;
  if (windowWidth >= 1600) {
    itemsPerRow = 6;
  } else if (windowWidth >= 1400) {
    itemsPerRow = 5;
  }else if (windowWidth <= 600) {
    itemsPerRow = 5;

  }else {
    itemsPerRow = 4;
  }

  let itemsPerRow2;
  if (windowWidth >= 1600) {
    itemsPerRow2 = 4;
  } else if (windowWidth >= 1400) {
    itemsPerRow2 = 3;
  } else if (windowWidth <= 600) {
    itemsPerRow2 = 2.5;
  }else {
    itemsPerRow2 = 2;
  }

  const gamesToShow = productsData.games.slice(0, itemsPerRow * 2);
  const appsToShow = productsData.apps.slice(0, itemsPerRow2 * 2);
  return (
    <div className='co'>
      <div className='gm'>
<<<<<<< Updated upstream
        <div className='ProductList-block'>
          <h1 className='ProductList-tit'>Популярные игры</h1>
          <NavLink className='' to={"/all"}><button className='game-button'>Все игры &#707;</button></NavLink>
=======
        <div className='sel-ghh'>
          <h1 className='tit'>Популярные игры</h1>
          <NavLink className='game-button' to={"/all"}>Все игры &#707;</NavLink>
>>>>>>> Stashed changes
        </div>
        <div className="under-block">
          <div className="product-list">
            {gamesToShow.map((game) => (
              <Link key={game.id} to={`/game/${game.id}`} className="product-card">
                <img src={game.logoURL} alt={game.title} className="product-logo" />
                <p className="product-name">{game.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='ap'>
<<<<<<< Updated upstream
        <div className='ProductList-block'>
          <h1 className='ProductList-tit'>Приложения</h1>
          <NavLink to={"/app"}><button className='game-button'>Все приложения &#707;</button></NavLink>
=======
        <div className='sel-ghh'>
          <h1 className='tit'>Приложения</h1>
          <NavLink className='game-button' to={"/app"}>Все приложения &#707;</NavLink>
>>>>>>> Stashed changes
        </div>
        <div className="under-block">
          <div className="product-list">
            {appsToShow.map((app) => (
              <Link key={app.id} to={`/app/${app.id}`} className="product-card-app">
                <img src={app.logoURL} alt={app.title} className="product-logo" />
                <p className="product-name">{app.title}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductList;
