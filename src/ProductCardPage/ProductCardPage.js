import React from "react";
import { Link, useParams } from "react-router-dom";
import cardData from "../ProductCard/card.json";
import "./ProductCardPage.css";
import renderStars from "../functions.js";
import { NavLink } from "react-router-dom";

const ProductCardPage = () => {
  const { id } = useParams();

  const product = cardData.cards.find((card) => card.id === parseInt(id));
  const cardsToShow = cardData.cards.slice(0, 10);

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
        {productsToShow.map((product) => (
          <div className="otziv">
            <div className="otziv-header">
              <img
                className="imggback"
                src={product.logo}
                alt={product.title}
              />
              <div className="otziv-header-center">
                <h2>{product.title}</h2>
                <h2>{renderStars(product.rating)}</h2>
              </div>
              <h2 className="otziv-date">12.34.21[32:24]</h2>
            </div>
            <div className="otziv-main">{product.opisaniye}</div>
            <div className="otziv-footer">
              <img
                className="otziv-img"
                src={product.image}
                alt={product.title}
              />
              <div className="otziv-footer-right">
                <h2 className="otziv-price">{product.price}$</h2>
                <h2>123213 на ваш аканут</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="des-prod">Товары из этой категории:</p>

      <div className="card-list2">
        {cardsToShow.map((card) => (
          <div className="product-card2">
            <NavLink
              key={card.id}
              to={`/product/${card.id}`}
              className="product-card-link"
            >
              <div className="firstline-card">
                <img src={card.logo} alt={card.title} className="card-logo" />
                <div className="text-card">
                  <p className="product-name2">{card.title}</p>
                  <p className="card-category2">{card.category}</p>
                </div>
              </div>
              <img
                src={card.image}
                alt={card.title}
                className="product-logo1"
              />

              <div className="card-description">
                <p className="product-name3">{card.price} ₽</p>
                <p className="descrip-prod">{card.description} </p>
                <p className="product-name3">{card.rating}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardPage;
