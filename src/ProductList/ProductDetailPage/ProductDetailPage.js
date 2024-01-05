import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from "../db.json";
import "./ProductDetailPage.css"

const ProductDetailPage = () => {
    const { id } = useParams();
    const gam = productsData.games.find((game) => game.id === parseInt(id));

  return (
    <div className="game-detail">
      <img src={gam.bannerURL} alt={gam.title} className="game-banner" />
      <div>
        <img src={gam.logoURL} alt={gam.title} className=''/>
        <h2>{gam.title}</h2>
      </div>
    </div>
  );
};

export default ProductDetailPage;
