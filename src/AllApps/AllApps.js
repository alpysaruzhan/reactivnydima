import React from 'react';
import { Link } from 'react-router-dom';
import productsData from "../ProductList/db.json";

const AllApps = () => {
  const sortedGames = productsData.apps.slice().sort((a, b) => a.title.localeCompare(b.title));

  const groupedGames = sortedGames.reduce((groups, app) => {
    const firstLetter = app.title[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(app);
    return groups;
  }, {});

  return (
    <div className="all-page">
      <Link to={"/"}>
      <h2 className='game-title'>&#706; Все приложения</h2>
      </Link>  
      <input className='input-tit' placeholder='Введите название приложения ...'></input>
      {Object.entries(groupedGames).map(([letter, apps]) => (
        <div key={letter}>
        <div className='firs'>
          <h2 className="letter">{letter}</h2>
          <div className="line"></div>
        </div>
          <div className="game-list">
            {apps.map((app) => (
              <Link key={app.id} to={`/app/${app.id}`} className="game-card">
                <img src={app.logoURL} alt={app.title} className="game-logo" />
                <p className="game-title2">{letter} - {app.title}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllApps;
