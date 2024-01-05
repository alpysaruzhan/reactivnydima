import React from 'react';
import discord from './img/footer/Discordlogo.png';
import insta from './img/footer/Instagramlogo.png';
import youtube from './img/footer/YouTubelogo.png';
import telegram from './img/footer/Telegramlogo.png';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <div className="footer-left">
            <h2 className="footer-title">Мы в социальных сетях</h2>
            <div className="footer-icons">
              <button className="footer-icons">
                <a href='https://discord.gg/jm3ZetnD'><img src={discord} alt="дискорд" /></a>
              </button>
              <button className="footer-icons">
                <img src={insta} alt="" />
              </button>
              <button className="footer-icons">
                <a href='https://youtube.com/@gamehubland '><img src={youtube} alt="" /></a>
              </button>
              <button className="footer-icons">
                <a href='https://t.me/gamehubland'><img src={telegram} alt="" /></a>
              </button>
              <div className="footer-lf">
                <div className="footer-p">
                  <div className="fot">Маркетплейс игровых услуг.</div>
                  <div className="fot">Gamehub 2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <h2 className="footer-title">Информация</h2>
            <div className="footer-l">
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#!" className="footer-link">Помощь</a>
                </li>
                <li className="footer-item">
                  <a href="#!" className="footer-link">Контакты</a>
                </li>
                <li className="footer-item">
                  <a href="/cookie" className="footer-link">Cookie</a>
                </li>
                <li className="footer-item">
                  <a href="#!" className="footer-link">Условия продажи</a>
                </li>
              </ul>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="/policy" className="footer-link">Политика конфиденциальности</a>
                </li>
                <li className="footer-item">
                  <a href="#!" className="footer-link">Сотрудничество</a>
                </li>
                <li className="footer-item">
                  <a href="#!" className="footer-link">Лицензионное соглашение</a>
                </li>
                <li className="footer-item">
                  <a href="#!" className="footer-link">Правила оплаты</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
