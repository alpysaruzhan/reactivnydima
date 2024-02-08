import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import HomePage from './routes/HomePage';
import ProfilePage from './ProfilePage/ProfilePage';
import ProfileReview from './ProfilePage/ProfileReview/ProfileReview';

import GuaranteePage from './routes/GuaranteePage';
import UserdocPage from './routes/UserdocPage';

import Register from './Register/Register';
import Regcod from './Regcod/Regcod';
import Auth from './Auth/Auth';
import Login from './Login/Login';
import Footer from './Footer';
import ProductDetailPage from './ProductList/ProductDetailPage/ProductDetailPage';
import ProductCardPage from './ProductCardPage/ProductCardPage';
import AllPage from './AllPage/AllPage';
import ProductList from './ProductList/ProductList';
import AllApps from './AllApps/AllApps';
import CookiePage from './Cookie/Cookie';
import PolicyPage from './Policy/Policy';

import BalancePage from './Balance/Balance';
import ChatPage from './ChatPage/ChatPage';
import { Cookies, CookiesProvider, withCookies } from 'react-cookie';
import { isAuthorized } from './GateWay/base';
import { instanceOf } from 'prop-types';
import SellPage from './Sell/SellPage';


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props)

    const { cookies } = props
    this.state = {
      'authorized': isAuthorized(cookies),
    }
  }
  

  render() {
    const { authorized } = this.state;

    return (
      <Router>
        <div > 
          <div className="app">
            <Sidebar />
            <div className="content">
              <Header authorized={authorized} />
              <div className='com'>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/all/:type" element={<AllPage />} />
                  {/* <Route path='/app' element={<AllApps />} /> */}
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/profile/review" element={<ProfileReview />} />

                  <Route path="/chat" element={<ChatPage />} />

                  {/* <Route path="/chat" element={<AllChat />} /> */}
                  {/* <Route path="/chat/:chatId" element={<Chat />} /> */}

                  <Route path="/guarantee" element={<GuaranteePage />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/sell' element={<SellPage />} />

                  <Route path='/login' element={
                    <CookiesProvider>
                      <Login />
                    </CookiesProvider>
                  } />
                  <Route path='/login/code' element={<Regcod />} />
                  <Route path='/login/auth' element={<Auth />} />
                  <Route path="/product/:id" element={<ProductCardPage />} />
                  <Route path="/" element={<ProductList />} />
                  <Route path="/game/:id" element={<ProductDetailPage />} />
                  <Route path='/cookie' element={<CookiePage />} />
                  <Route path='/policy' element={<PolicyPage />} />
                  <Route path='/privacy' element={<UserdocPage />} />
                  <Route path='/balance' element={<BalancePage />} />

                </Routes>
              </div>
            </div>
          </div>
          {/* <button onClick={toggleTheme}>Переключить тему</button> */}
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
