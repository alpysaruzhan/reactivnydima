import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const sortedApps = productsData.apps.slice().sort((a, b) => a.title.localeCompare(b.title));
  const groupedApps = sortedApps.reduce((groups, app) => {
    const firstLetter = app.title[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(app);
    return groups;
  }, {});

  const [activec, setActivec] = useState("c1");
  const handlecClick = (c) => {
    setActivec(c);
  };

  return (
    <div className="all-page">
      <div className="all-button">
        <h2 className="game-title">
          Выберите <br /> игру или приложение
        </h2>
        <input
          className="input-tit"
          placeholder="Введите название игры ..."
        ></input>
        <div className="cs">
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

      <div className="c-content">
        {activec === "c1" && (
          <div className="gsel">
            {Object.entries(groupedGames).map(([letter, games]) => (
              <div key={letter}>
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
            {Object.entries(groupedApps).map(([letter, apps]) => (
              <div key={letter}>
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
  );
};

export default AllPage;
