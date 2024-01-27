import { NavLink } from "react-router-dom";
import "./OtzivComponent.css";
import renderStars from "../functions.js";


const OtzivComponent = ({ product }) => {


  return (
    <div className="otziv">
      <div className="otziv-header">
        <img
          className="otziv-imggback"
          src={product.logo}
          alt={product.title}
        />
        <div className="otziv-header-center">
          <h2 className="otziv-header-title">{product.title}</h2>
          <h2 className="otziv-header-stars" > {renderStars(product.rating)}</h2>
        </div>
        <h2 className="otziv-date">15.06.23 [14:30]</h2>
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
  );
};

export default OtzivComponent;
