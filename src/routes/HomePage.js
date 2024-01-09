import React from "react";
import bannerImage from "../img/banner.jpg";
import "./HomePage.css";
import ProductList from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import purplegh from "../img/gh_purple.png";

const HomePage = () => {
  return (
    <div className="cont">
      <div className="oo">
        <div className="home_mobile"></div>
        <div className="banner">
          <img src={bannerImage} alt="" />
        </div>
        <div>
          <ProductList />
        </div>
        {<div>
          <ProductCard />
        </div>}
      </div>
    </div>
  );
};

export default HomePage;
