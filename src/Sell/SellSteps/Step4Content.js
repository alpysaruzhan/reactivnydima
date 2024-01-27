import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../SellPage.css";

const Step4ContentPage = () => {
  const svgCode = `  
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M47.501 45H12.501C11.1203 45 10.001 46.1193 10.001 47.5C10.001 48.8807 11.1203 50 12.501 50H47.501C48.8817 50 50.001 48.8807 50.001 47.5C50.001 46.1193 48.8817 45 47.501 45Z" fill="#4A307F" fill-opacity="0.78"/>
  <path d="M10.001 42.5019V47.502C10.001 48.8827 11.1203 50.002 12.501 50.002C13.8817 50.002 15.001 48.8827 15.001 47.502V42.5019C15.001 41.1212 13.8817 40.0019 12.501 40.0019C11.1203 40.0019 10.001 41.1212 10.001 42.5019Z" fill="#4A307F" fill-opacity="0.78"/>
  <path d="M45 42.5019V47.502C45 48.8827 46.1193 50.002 47.5 50.002C48.8807 50.002 50 48.8827 50 47.502V42.5019C50 41.1212 48.8807 40.0019 47.5 40.0019C46.1193 40.0019 45 41.1212 45 42.5019Z" fill="#4A307F" fill-opacity="0.78"/>
  <path d="M30.0026 37.4981C29.4843 37.502 28.9776 37.3447 28.5526 37.0481L18.5526 29.9981C18.0136 29.6157 17.6479 29.0355 17.5355 28.3844C17.4231 27.7332 17.573 27.064 17.9526 26.5231C18.142 26.2527 18.3832 26.0225 18.6621 25.8458C18.941 25.6691 19.2521 25.5495 19.5775 25.4937C19.9029 25.4379 20.2362 25.4471 20.558 25.5208C20.8798 25.5945 21.1839 25.7312 21.4526 25.9231L30.0026 31.8981L38.5026 25.4981C39.033 25.1002 39.6998 24.9294 40.3561 25.0232C41.0125 25.117 41.6048 25.4676 42.0026 25.9981C42.4004 26.5285 42.5712 27.1952 42.4775 27.8516C42.3837 28.508 42.033 29.1002 41.5026 29.4981L31.5026 36.9981C31.0698 37.3226 30.5435 37.4981 30.0026 37.4981Z" fill="#4A307F" fill-opacity="0.78"/>
  <path d="M29.999 32.5C29.336 32.5 28.7001 32.2366 28.2313 31.7678C27.7624 31.2989 27.499 30.663 27.499 30V10C27.499 9.33696 27.7624 8.70107 28.2313 8.23223C28.7001 7.76339 29.336 7.5 29.999 7.5C30.6621 7.5 31.298 7.76339 31.7668 8.23223C32.2356 8.70107 32.499 9.33696 32.499 10V30C32.499 30.663 32.2356 31.2989 31.7668 31.7678C31.298 32.2366 30.6621 32.5 29.999 32.5Z" fill="#4A307F" fill-opacity="0.78"/>
  </svg>
  `;
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='sellall-con'>
      <h1 className='h-cat'>&lt; Фото:</h1>
      <div className='n-sel'>
        <div>
          {image ? (
            <div>
            <img className='img-sel' src={image} alt="Uploaded" />
            </div>
          ) : (
            <div className='div-photo'>
            <div className='p-photo'>
            <label htmlFor="photoInput" className='svg-sell'>
              <div className='svg-sell' dangerouslySetInnerHTML={{ __html: svgCode }} />
              <p>Нажми или перетащи нужную фотографию</p>
              <input
                type="file"
                id="photoInput"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </label>
            </div>
            </div>
          )}
        </div>
      </div>
        <button type="submit" className='photo-but'>Продолжить</button>
    </div>
  );
}

export default Step4ContentPage;
