import { NavLink } from "react-router-dom";
import "./ProductComponent.css";
import { asFileUrl } from "../GateWay/base";
import renderStars from "../functions.js";


const ProductComponent = ({ card }) => {


  return (
    <div className="ProductComponent-product-card2">
      <NavLink
        key={card.id}
        to={`/product/${card.id}`}
        className="ProductComponent-product-card-link"
      >
        <div className="ProductComponent-firstline-card">
          <img src={asFileUrl(card.photos[0].fileUrl)} alt={card.title} className="ProductComponent-card-logo" />
          <div className="ProductComponent-text-card">
            <p className="ProductComponent-product-name2">{card.category.gameName}</p>
            <p className="ProductComponent-card-category2">{card.category.name}</p>
          </div>
        </div>
        <img
          src={asFileUrl(card.photos[0].fileUrl)}
          alt={card.title}
          className="ProductComponent-product-logo1"
        />

        <div className="ProductComponent-card-description">
          <p className="ProductComponent-product-name3">{card.basePrice.amount} {card.basePrice.currency}</p>
          <p className="ProductComponent-descrip-prod">{card.text} </p>
          <div className="ProductComponent-rating">
            <p className="ProductComponent-product-rating-left">{card.user.rating}  {renderStars(card.user.rating)} </p>
            <p className="ProductComponent-product-rating-right">{card.user.reviewsCount} Отзывов</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductComponent;
