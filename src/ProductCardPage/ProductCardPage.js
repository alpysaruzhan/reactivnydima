import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cardData from '../ProductCard/card.json';
import "./ProductCardPage.css";

const ProductCardPage = () => {

  const { id } = useParams();

  const product = cardData.cards.find((card) => card.id === parseInt(id));

  if (!product) {
    return <div>Товар не найден</div>;
  }


  return (
    <div className='cont4'>
    <div className='backcont'>
    <Link to={"/"} className='link-secc'>
      <p className='hei'>&#706;</p>
      <img className='imggback' src={product.logo} alt={product.title} />
      <div className='tttt'>
        <p className='titlog'>{product.title}</p>
        <p className='plog'>{product.category}</p>
      </div>
    </Link>
    </div>
    <div className='carddd'>
      <img className='img-product-card-page' src={product.image} alt={product.title} />
      <div className='descr-product'>
      <div className='desr-first'>
        <p className='price-product'>{product.price} ₽</p>
        <p className='decr-prod'>{product.description}</p>
      </div>
      <div className='second-desc-prod'>
        <Link className='link-sec'>🔒 Безопасность сделки</Link>
        <p className='rating-prod'>{product.rating}</p>
        <button className='button-prod'>Купить</button>
      </div>
      </div>
    </div>
    <div className='section-category'>
      <div className='opisaniye-prod'>
        <p className='des-prod'>Описание:</p>
        <p className='prod-opi'>{product.opisaniye}</p>
      </div>
      <div>
      <div>
  <p className='des-prod'>Категории:</p>
  <ul>
    {product.characteristics.map((characteristic, index) => (
      <div className='div-char'>
      <div>
      <p className='character-name'>{characteristic.name}:</p>
      <p key={index}>{characteristic.quantity}</p>
      </div>
      </div>
    ))}
  </ul>
</div>
<div>
  
</div>

      </div>
    </div>
    </div>
  
  );
};

export default ProductCardPage;
