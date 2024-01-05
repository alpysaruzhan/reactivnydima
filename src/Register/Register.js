import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultImage from "../img/default.png";
import "./Register.css";

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className='register'>
      <div className='contain'>
        <div className='login-right'>
          <div className='login-tit'>
            <h3 className='auth-title'>Регистрация аккаунта</h3>
          </div>
          <div className='log-form'>
            <div className="my-component">
              <div className="image-container">
                <img className="selected-image" src={selectedImage} alt="Selected Image" />
              </div>
              <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />
              <button className='imgauth' onClick={handleButtonClick}>Загрузить фотографию</button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <input className='log-input' type="email" placeholder="Придумайте себе никнейм" />
              <button type="submit" className='log-button'>Сохранить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
