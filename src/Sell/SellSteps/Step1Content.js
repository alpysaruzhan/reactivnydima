import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MarketApi } from 'market_place';
import { Instance, basePath } from '../../GateWay/base';

const Step1ContentPage = ({ handleStepChange }) => {
  const [activec, setActivec] = useState('c1');
  const [games, setGames] = useState([]);
  const marketAPI = new MarketApi(Instance);
  const navigate = useNavigate();

  useEffect(() => {
    marketAPI.getGamesApiV1GameGet('APPLICATION', {limit: 20}, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        setGames([...data.objects, ...games]);
        console.log(data.objects);
      }
    });
    marketAPI.getGamesApiV1GameGet('GAME', {limit: 20}, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        setGames([...data.objects, ...games]);
        console.log(data.objects);
      }
    });
  }, []);

  const handlecClick = (c) => {
    setActivec(c);
  };

  const handleGameClick = (gameId) => {
    localStorage.setItem('selectedType', 'game');
    localStorage.setItem('selectedGameId', gameId);
    console.log("my game",gameId);
    handleStepChange(2);
  };

  const handleAppClick = (appId) => {
    localStorage.setItem('selectedType', 'app');
    localStorage.setItem('selectedGameId', appId);
    handleStepChange(2);
  };

  return (
    <div className='sellall-con'>
      <div className="css-input">
        <div>
          <p className='pp-sel'>&lt; Выберите игру/приложение</p>
        </div>
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
                <button onClick={() => handleGameClick(game.id)}>
                  <img className='lgsell' src={basePath + game.logo.fileUrl} alt={game.name} />
                  <p className='p-tit-sell'>{game.name}</p>
                </button>
              </div>
            ))}
          </div>
        )}
        {activec === 'c2' && (
          <div className='gsel'>
            {games.map((app) => (
              app.type === "APPLICATION" && (
                <div key={app.id}>
                  <div onClick={() => handleAppClick(app.id)}>
                    <img className='lgsell' src={basePath + app.logoURL} alt={app.title} />
                    <p className='p-tit-sell'>{app.title}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Step1ContentPage;
