import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import HomePage from "./routes/HomePage";
import ProfilePage from "./ProfilePage/ProfilePage";
import SellPage from "./Sell/SellPage";
import ChatPage from "./Chat/ChatPage";
import GuaranteePage from "./routes/GuaranteePage";
import Register from "./Register/Register";
import Regcod from "./Regcod/Regcod";
import Auth from "./Auth/Auth";
import Login from "./Login/Login";
import Footer from "./Footer";
import ProductDetailPage from "./ProductList/ProductDetailPage/ProductDetailPage";
import ProductCardPage from "./ProductCardPage/ProductCardPage";
import AllPage from "./AllPage/AllPage";
import ProductList from "./ProductList/ProductList";
import AllApps from "./AllApps/AllApps";
import CookiePage from "./Cookie/Cookie";
import PolicyPage from "./Policy/Policy";
import BalancePage from "./Balance/Balance";
import SellAllPage from "./Sell/SellAllPage";
import SellCategoriesPage from "./Sell/SellCategories";
import AppDetailPage from "./Sell/AppDetailPage";
import GameDetailPage from "./Sell/GameDetailPage";
import { CookiesProvider } from "react-cookie";

const App = () => {
  return (
    <Router>
      <div>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Header />
            <div className="com">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/all" element={<AllPage />} />
                <Route path="/app" element={<AllApps />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/sell" element={<SellPage />} />
                <Route path="/sellall" element={<SellAllPage />} />
                <Route
                  path="/category/game/:title"
                  element={<GameDetailPage />}
                />
                <Route
                  path="/category/app/:title"
                  element={<AppDetailPage />}
                />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/guarantee" element={<GuaranteePage />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/login"
                  element={
                    <CookiesProvider>
                      <Login />
                    </CookiesProvider>
                  }
                />
                <Route path="/login/code" element={<Regcod />} />
                <Route path="/login/auth" element={<Auth />} />
                <Route path="/product/:id" element={<ProductCardPage />} />
                <Route path="/" element={<ProductList />} />
                <Route path="/game/:id" element={<ProductDetailPage />} />
                <Route path="/cookie" element={<CookiePage />} />
                <Route path="/policy" element={<PolicyPage />} />
                <Route path="/balance" element={<BalancePage />} />
              </Routes>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
