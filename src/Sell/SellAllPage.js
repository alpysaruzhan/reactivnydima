import React, { useState } from 'react';
import "./SellPage.css";
import { Link } from 'react-router-dom';
import data from '../ProductList/db.json';

const SellAllPage = () => {
//   const { id } = useParams();

  const [activec, setActivec] = useState('c1');
  const handlecClick = (c) => {
    setActivec(c);
  };

  return (
    <div className='cont8'>
      <div>
        <p className='pp-sel'>Выберите игру/приложение</p>
        <input className='sell-input' type="email" placeholder="Поиск игр и приложений" />
      </div>
      <div className="css">
        <button className={activec === 'c1' ? 'butpril activeeew' : 'butpril'} onClick={() => handlecClick('c1')}>Игры</button>
        <button className={activec === 'c2' ? 'butpril activeeew' : 'butpril'} onClick={() => handlecClick('c2')}>Приложения</button>
      </div>

      <div className="c-content">
        {activec === 'c1' && (
          <div className='gsel'>
              {data.games.map((game) => (
                <div key={game.id}>
                    <Link to={`/category/game/${game.title}`}>
                    <img className='lgsell' src={game.logoURL}></img>
                    <p className='p-tit-sell'>{game.title}</p>
                    </Link>
                </div>
              ))}
          </div>
        )}
        {activec === 'c2' && (
          <div className='gsel'>
              {data.apps.map((app) => (
                <div key={app.id}>
                    <Link to={`/category/app/${app.title}`}>
                    <img className='lgsell' src={app.logoURL}></img>
                    <p className='p-tit-sell'>{app.title}</p>
                    </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SellAllPage;
