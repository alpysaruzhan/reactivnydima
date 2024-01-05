import React from 'react';
import { useParams } from 'react-router-dom'; // Ensure you are importing useParams from 'react-router-dom'
import "./SellPage.css";
import data from '../ProductList/db.json';

const GameDetailPage = () => {

  const { id } = useParams();

  const produc = data.games.find((game) => game.id === parseInt(id));

  if (!produc) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className='cont8'>
     {produc.characteristics.map((game, id) => (
      <div className='div-char' key={id}>
        <div>
          <p className='character-name'>{game.name}:</p>
          <p>{game.quantity}</p>
        </div>
      </div>
    ))}
    </div>
  );
}

export default GameDetailPage;
