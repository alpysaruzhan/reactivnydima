// import React from 'react';
// import "./SellPage.css";
// import { Link } from 'react-router-dom';

// const SellPage = () => {
//   return (
//     <div className='login'>
//       <h2 className='hh'>Перед тем как <br></br> приступить к продаже:</h2>
      // <div className='divsa'>
      //   <div className='greensel'></div>
      //   <div className='redsel'></div>
      // </div>
      // <div>
      //   <Link to={"/policy"}>
      //     <p className='p-sel'>Нажимая «Начать продажу», Вы принимаете Условия продажи</p>
      //   </Link>
      //   <Link to={"/sellall"}>
      //   <button type="submit" className='sell-bbu'>Приступить к продаже</button>
      //   </Link>
      // </div>
//     </div>
//   );
// }

// export default SellPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import gmail from "../img/Ellipse50.png";
import vk from "../img/Ellipse49.png";
import { Instance, setToken } from '../GateWay/base';
import { AuthApi } from 'market_place';
import { AUTH_KEY, TEMP_EMAIL_KEY } from '../GateWay/consts';

const SellPage = (props) => {

  return (
    <div className="sell-con">
      <div className="login-contt">
          <div className="login-tit">
            <h2 className='hh'>Перед тем как <br></br> приступить к продаже:</h2>
          </div>
          <div className="log-form">
            <div className='divsa'>
              <div className='greensel'></div>
              <div className='redsel'></div>
            </div>
            <div>
              <Link to={"/policy"}>
                <p className='p-sel'>Нажимая «Начать продажу», Вы принимаете Условия продажи</p>
              </Link>
              <Link to={"/sellall"}>
                <button type="submit" className='sell-bbu'>Приступить к продаже</button>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SellPage;
