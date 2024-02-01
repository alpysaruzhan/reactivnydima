import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../ProductList/db.json";
import "./AllPage.css";

const AllPage = () => {


  const sortedApps = productsData.apps
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  const groupedApps = sortedApps.reduce((groups, app) => {
    const firstLetter = app.title[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(app);
    return groups;
  }, {});

  const sortedGames = productsData.games
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  const groupedGames = sortedGames.reduce((groups, game) => {
    const firstLetter = game.title[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(game);
    return groups;
  }, {});

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState(groupedApps);
  const [filteredGames, setFilteredGames] = useState(groupedGames);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredAppsResult = Object.fromEntries(
      Object.entries(groupedApps).map(([key, value]) => [
        key,
        value.filter((item) => item.title.toLowerCase().includes(term.toLowerCase())),
      ]).filter(([key, value]) => value.length > 0)
    );

    setFilteredApps(filteredAppsResult);

    const filteredGamesResult = Object.fromEntries(
      Object.entries(groupedGames).map(([key, value]) => [
        key,
        value.filter((item) => item.title.toLowerCase().includes(term.toLowerCase())),
      ]).filter(([key, value]) => value.length > 0)
    );

    setFilteredGames(filteredGamesResult);
  };

  const { type } = useParams();

  const [activec, setActivec] = useState(type);
  const handlecClick = (c) => {
    setActivec(c);
  };
  console.log(groupedApps);
  return (
    <div className="ultra-all-page">
      <div className="all-page">
        <div className="all-button">
          <h2 className="game-title">Выберите игру или приложение</h2>
          <div className="cs">
            <input
              className="input-tit"
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="cs-button">
              <button
                className={activec === "c1" ? "butprill activeeew" : "butprill"}
                onClick={() => handlecClick("c1")}
              >
                Игры
              </button>
              <button
                className={activec === "c2" ? "butprill activeeew" : "butprill"}
                onClick={() => handlecClick("c2")}
              >
                Приложения
              </button>
            </div>
          </div>
        </div>

        <div className="c-content">
          {activec === "c1" && (
            <div className="gsel">
              {Object.entries(filteredGames).map(([letter, games]) => (
                <div key={letter} className="letter-block">
                  <div className="firs">
                    <h2 className="letter">{letter}</h2>
                    <div className="line"></div>
                  </div>
                  <div className="game-list">
                    {games.map((game) => (
                      <Link
                        key={game.id}
                        to={`/game/${game.id}`}
                        className="game-card"
                      >
                        <img
                          src={game.logoURL}
                          alt={game.title}
                          className="game-logo"
                        />
                        <p className="game-title2">
                          {letter} - {game.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activec === "c2" && (
            <div className="gsel">
              {Object.entries(filteredApps).map(([letter, apps]) => (
                <div key={letter} className="letter-block">
                  <div className="firs">
                    <h2 className="letter">{letter}</h2>
                    <div className="line"></div>
                  </div>
                  <div className="game-list">
                    {apps.map((app) => (
                      <Link
                        key={app.id}
                        to={`/app/${app.id}`}
                        className="game-card"
                      >
                        <img
                          src={app.logoURL}
                          alt={app.title}
                          className="game-logo"
                        />
                        <p className="game-title2">
                          {letter} - {app.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPage;
