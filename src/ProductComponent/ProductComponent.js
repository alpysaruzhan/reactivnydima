import { NavLink } from "react-router-dom";
import "./ProductComponent.css";


const ProductComponent = ({card}) => {


  return (
    <div className="ProductComponent-product-card2">
      <NavLink
        key={card.id}
        to={`/product/${card.id}`}
        className="ProductComponent-product-card-link"
      >
        <div className="ProductComponent-firstline-card">
          <img src={card.logo} alt={card.title} className="ProductComponent-card-logo" />
          <div className="ProductComponent-text-card">
            <p className="ProductComponent-product-name2">{card.title}</p>
            <p className="ProductComponent-card-category2">{card.category}</p>
          </div>
        </div>
        <img
          src={card.image}
          alt={card.title}
          className="ProductComponent-product-logo1"
        />

        <div className="ProductComponent-card-description">
          <p className="ProductComponent-product-name3">{card.price} ₽</p>
          <p className="ProductComponent-descrip-prod">{card.description} </p>
          <p className="ProductComponent-product-name3">{card.rating}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductComponent;
