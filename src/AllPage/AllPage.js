import React from 'react';
import { Link } from 'react-router-dom';
import productsData from "../ProductList/db.json";
import "./AllPage.css";

const AllPage = () => {
  const sortedGames = productsData.games.slice().sort((a, b) => a.title.localeCompare(b.title));

  const groupedGames = sortedGames.reduce((groups, game) => {
    const firstLetter = game.title[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(game);
    return groups;
  }, {});

  return (
    <div className="all-page">
      <h2 className='game-title'>&#706; Все игры</h2>
      <input className='input-tit' placeholder='Введите название игры ...'></input>
      {Object.entries(groupedGames).map(([letter, games]) => (
        <div key={letter}>
        <div className='firs'>
          <h2 className="letter">{letter}</h2>
          <div className="line"></div>
        </div>
          <div className="game-list">
            {games.map((game) => (
              <Link key={game.id} to={`/game/${game.id}`} className="game-card">
                <img src={game.logoURL} alt={game.title} className="game-logo" />
                <p className="game-title2">{letter} - {game.title}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPage;
