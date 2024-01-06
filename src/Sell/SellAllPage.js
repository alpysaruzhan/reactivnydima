import React, { useState, useParams, useEffect } from 'react';
import "./SellPage.css";
import { Link } from 'react-router-dom';
import { MarketApi, ProductApi } from 'market_place';
import { Instance, basePath } from '../GateWay/base';

const SellAllPage = () => {
//   const { id } = useParams();

  const [activec, setActivec] = useState('c1');
  const [games, setGames] = useState([])
  const handlecClick = (c) => {
    setActivec(c);
  };

  const marketAPI = new MarketApi(Instance); 
  useEffect(() => {marketAPI.getGamesApiV1GameGet({}, (error, data, response) => { 
    if (error) { 
      console.error(error)
    } else { 
      setGames(data.objects)
      console.log(data.objects)
    }
  })}, []); 

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
              {games.map((game) => (
                <div key={game.id}>
                    <Link to={`/category/game/${game.name}`}>
                    <img className='lgsell' src={basePath + game.logo.fileUrl}></img>
                    <p className='p-tit-sell'>{game.name}</p>
                    </Link>
                </div>
              ))}
          </div>
        )}
        {activec === 'c2' && (
          <div className='gsel'>
            {games.map((app) => (
              app.type === "APPLICATION" && (
                <div key={app.id}>
                  <Link to={`/category/app/${app.title}`}>
                    <img className='lgsell' src={app.logoURL} alt={app.title} />
                    <p className='p-tit-sell'>{app.title}</p>
                  </Link>
                </div>
              )
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default SellAllPage;
