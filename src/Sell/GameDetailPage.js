import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import "./SellPage.css";
import { MarketApi, ProductApi } from 'market_place';
import { Instance, basePath } from '../GateWay/base';

const GameDetailPage = () => {
  const { id } = useParams();
  const marketAPI = new MarketApi(Instance); 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    marketAPI.getGameApiV1GameGameIdGet(id, (error, data, response) => { 
      if (error) { 
        console.error(error)
      } else { 
        setCategories(data.categories)
        console.log(data.categories)
      }
    });
  }, [id]); 

  return (
    <div className='cont8'>
     <div className='category-page'>
              {categories.map((game) => (
                <div key={game.id}>
                    <Link to={`/character/game/${game.name}`}>
                    <p className='p-tit-sell'>{game.name}</p>
                    </Link>
                </div>
              ))}
          </div>
    </div>
  );
}

export default GameDetailPage;
