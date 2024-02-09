import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../SellPage.css";
import { MarketApi, ProductApi } from 'market_place';
import { Instance, basePath } from '../../GateWay/base';

const Step2ContentPage = ({ handleStepChange }) => {
  const marketAPI = new MarketApi(Instance);
  const [categories, setCategories] = useState([]);
  let gameId = localStorage.getItem("selectedGameId")
  console.log(gameId)
  useEffect(() => {
    // localStorage.setItem('selectedGameId', gameId);

    marketAPI.getGameApiV1GameGameIdGet(gameId, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        setCategories(data.categories);
        console.log(data.categories);
      }
    });
  }, [gameId]);
  const handleCategoryClick = (categoryId) => {
    localStorage.setItem('selectedCategoryName', categoryId);
    handleStepChange(3);
  };
  


  return (
    <div className='sellall-con'>
      <div className='category-pag'>
        <h1 onClick={() => handleStepChange(1)} className='h-cat'>&lt; Категории:</h1>

        {categories.map((category) => (
          <div onClick={() => handleCategoryClick(category.name)} className='div-cat' key={category.id}>
            <p className='p-cat'>· {category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Step2ContentPage;
