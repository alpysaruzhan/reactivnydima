import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import MyProfile from './MyProfile';
import MyPurchases from './MyPurchases';
import MySales from './MySales';
import "../ProfilePage.css"

const RoutesProfile = () => {
  return (
    <div className='cont2'>
      <div>
        <ul className='all-prof'>
          <li className='prof-s'>
            <p className='para-prof'><Link to="/my-sales">Мои продажи</Link></p>
          </li>
          <li className='prof-s'>
            <p className='para-prof'><Link to="/my-purchases">Мои покупки</Link></p>
          </li>
          <li className='prof-s'>
            <p className='para-prof'><Link to="/my-profile">Мой профиль</Link></p>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/my-sales/*" element={<MySales />} />
          <Route path="/my-purchases" element={<MyPurchases />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default RoutesProfile;
