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
    <div className='sellall-con'>
     <div className='category-pag'>
      <h1 className='h-cat'>&lt; Категории:</h1>

              {categories.map((category) => (
                <div className='div-cat' key={category.id}>
                    <Link to={`/character/game/${category.id}`}>
                    <p className='p-cat'>· {category.name}</p>
                    </Link>
                </div>
              ))}
          </div>
    </div>
  );
}

export default GameDetailPage;
