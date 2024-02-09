import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MarketApi } from 'market_place';
import { Instance } from '../../GateWay/base';
import '../SellPage.css';

const Step8ContentPage = ({ handleStepChange }) => {
  const [games, setGames] = useState([]); 
  const [inputValue, setInputValue] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [shortDescription, setShortDescription] = useState('');
  const [price, setPrice] = useState({
    amount: 0,
    currency: 'RUB',
  });
  const marketAPI = new MarketApi(Instance);
  const navigate = useNavigate();
  
  useEffect(() => {
    const selectedLabel = localStorage.getItem('selectedLabel');
    console.log('Selected Label:', selectedLabel);
    const storedImage = localStorage.getItem('uploadedImage');
    if (storedImage) {
      setUploadedImage(storedImage);
    }
    const storedShortDescription = localStorage.getItem('shortDescription');
    if (storedShortDescription) {
      setShortDescription(storedShortDescription);
    }
    marketAPI.getGamesApiV1GameGet({limit: 100, offset: 0}, (error, data, response) => { 
      if (error) { 
        console.error(error)
      } else { 
        console.log(data) 
        setGames(data.objects) 
      }
    })
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const serviceFee = value * 0.1;
    const revenueFromSale = value * 0.9;
    localStorage.setItem('serviceFee', serviceFee.toFixed(1));
    localStorage.setItem('revenueFromSale', revenueFromSale.toFixed(1));
    localStorage.setItem('inputValue', value);
  };

  const CreateDraftProduct = () => {
    const selectedType = localStorage.getItem('selectedType');
    const selectedGameId = localStorage.getItem('selectedGameId');
    const selectedCategoryName = localStorage.getItem('selectedCategoryName')
    const selectedLabel = localStorage.getItem('selectedLabel');
    const uploadedImage = localStorage.getItem('uploadedImage');
    const productDescription = localStorage.getItem('productDescription');
    const storedShortDescription = localStorage.getItem('shortDescription');
    // const formData = new FormData();
    // formData.append('image', image);

    // Add checks for undefined games or selectedItemId
    if (!selectedGameId) {
      console.error('Games array or selectedItemId is undefined.');
      return;
    }

    const selectedGame = games.find((game) => game.id === selectedGameId);

    if (!selectedGame) {
      console.error('Selected game not found in the games array.');
      return;
    }
    const callback = (error, data, response) => { 
      if (error) { 
        console.error(error)
      } else { 
        console.log(data)
        setTimeout(() => {
          navigate("/prodat")
        }, 500)
      }
    }

    localStorage.removeItem('uploadedImage');
    localStorage.removeItem('shortDescription');
    localStorage.removeItem('serviceFee');
    localStorage.removeItem('revenueFromSale');
    localStorage.removeItem('inputValue');

    if (selectedType === 'game') {
      marketAPI.productCreateProductApiV1ProductPost(JSON.stringify({
        name: selectedGame.name,
        text: productDescription,
        category_name: selectedCategoryName,
        short_description: storedShortDescription,
        price: {
          amount: price.amount,
          currency: 'RUB',
        },
        characteristics: [{ label: selectedLabel, value: 'someValue' }],
        tags: [],
      }), [uploadedImage], callback);
    } else if (selectedType === 'app') {
      marketAPI.productCreateProductApiV1ProductPost(JSON.stringify({
        name: selectedGame.name, // Use selectedGame instead of selectedApp
        text: productDescription,
        category_name: selectedCategoryName,
        short_description: storedShortDescription,
        price: {
          amount: price.amount,
          currency: 'RUB',
        },
        characteristics: [{ label: selectedLabel, value: 'someValue' }],
        tags: [],
      }), [uploadedImage], callback);
    }
  };

  return (
    <div className='sellall-con'>
      <div className='sel-h'>
        <h1 className='h-cat'>&lt; Сумма товара:</h1>
        <input  className='input-name' type='number'  value={price.amount} onChange={(e) => setPrice({ ...price, amount: e.target.value, handleInputChange})} />
          <button onClick={() => CreateDraftProduct()} className='name-but'>
            Продолжить
          </button>
        <div>
          <p>Сервисные сборы: {localStorage.getItem('serviceFee')}</p>
          <p>Доход от продажи: {localStorage.getItem('revenueFromSale')}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Step8ContentPage;