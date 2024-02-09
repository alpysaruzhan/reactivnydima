import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import cardData from "../card.json";
import "./ProductCardPage.css";
import renderStars from "../functions.js";
import { NavLink } from "react-router-dom";
import ProductComponent from '../ProductComponent/ProductComponent';
import OtzivComponent from "../OtzivComponent/OtzivComponent.js";
import { CategoryApi, MarketApi } from 'market_place';
import { Instance } from '../GateWay/base';

const ProductCardPage = () => {
  const { id } = useParams();

  const product = cardData.cards.find((card) => card.id === parseInt(id));

  const cardsToShow = cardData.cards.slice(0, 10);
  console.log(123);

  useEffect(() => {

    console.log("id",id);
    const market = new MarketApi(Instance)
    market.productGetProductByIdApiV1ProductProductIdGet(id, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        console.log("game", data)

      }
    })

  }, [])

  // useEffect(() => {

  //   if (currCategory.length !== 0) {
  //     const category = new CategoryApi(Instance)
  //     category.categoryGetCategoryProductsApiV1CategoryCategoryNameGet(currCategory, (error, data, response) => {
  //       if (error) {
  //         console.error(error)
  //       } else {
  //         console.log("CategoryApi", data.objects)
  //         //setCurrCategory(data.objects[0])
  //         setCardsToShow(data.objects)
  //         console.log("cardsToShow", cardsToShow);
  //       }
  //     })
  //     console.log("currCategory", currCategory);
  //   }

  // }, [currCategory])

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const products = [product, product, product, product, product];
  if (!product) {
    return <div>Товар не найден</div>;
  }

  let itemsPerRow2 = 0;
  // const [productsToShow, setProductsToShow] = React.useState(products.slice(0, itemsPerRow2));

  if (windowWidth >= 1600) {
    itemsPerRow2 = 3;
    // setProductsToShow(products.slice(0, itemsPerRow2))

  } else if (windowWidth >= 850) {
    itemsPerRow2 = 2;
  } else {
    itemsPerRow2 = 1;
  }

  const productsToShow = products.slice(0, itemsPerRow2)
  return (
    <div className="cont4">
      <Link to={"/"} className="link-secc">
        <p className="hei">&#706;</p>
        <img className="imggback" src={product.logo} alt={product.title} />
        <div className="tttt">
          <p className="titlog">{product.title}</p>
          <p className="plog">{product.category}</p>
        </div>
      </Link>

      <div className="carddd">
        <img
          className="img-product-card-page"
          src={product.image}
          alt={product.title}
        />
        <div className="descr-product">
          <div className="desr-first">
            <p className="price-product">{product.price} ₽</p>
            <p className="decr-prod">{product.description}</p>
          </div>
          <div className="second-desc-prod">
            <Link className="link-sec">🔒 Безопасность сделки</Link>

            <div className="second-prof">
              <div className="rwe">
                <h2 className="rating-prof"> {product.rating}</h2>
                <h2>{renderStars(product.rating)}</h2>
              </div>
              <p className="prof-rev"> {product.reviews} отзывов</p>
            </div>

            <button className="button-prod">Купить</button>
          </div>
        </div>
      </div>

      <div className="section-category">
        <div className="opisaniye-prod">
          <p className="des-prod">Описание:</p>
          <p className="prod-opi">{product.opisaniye}</p>
        </div>
        <div>
          <p className="des-prod">Категории:</p>
          <ul className="categ-div">
            {product.characteristics.map((characteristic, index) => (
              <div className="div-char">
                <p className="character-name">{characteristic.name}:</p>
                <p className="character-quantity" key={index}>
                  {characteristic.quantity}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className="otziv-top">
        <h2 className="otziv-rating">{product.rating}</h2>
        <div className="otziv-top-right">
          <h2 className="otziv-count"> {product.reviews} отзывов</h2>
          <h2>{renderStars(product.rating)}</h2>
        </div>
        <u className="otziv-vse">Все отзывы (1430) </u>
      </div>

      <div className="section-otzivi">
        {/* {productsToShow.map((product) => (
          // <OtzivComponent product={product} />
        ))} */}
      </div>

      <p className="des-prod">Товары из этой категории:</p>

      <div className="card-list2">
        {/* {cardsToShow.map((card) => (
          // <ProductComponent card={card} />

        ))} */}
      </div>
    </div>
  );
};

export default ProductCardPage;
