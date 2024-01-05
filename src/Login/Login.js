import React, { useStates } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import gmail from "../img/Ellipse50.png";
import vk from "../img/Ellipse49.png";


const Login = () => {
  const [tempPassword, setTempPassword] = useState('');
  const [cookies, setCookie] = useCookies(['access_token']);
  const history = useHistory();
  const email = localStorage.getItem('registeredEmail');
  let apiInstance = new AuthApi(Instance);

  function handleLogin(event) {
      event.preventDefault();
      apiInstance.authJwtLoginApiV1AuthJwtLoginPost(tempPassword, email, (error, data, response) => {
          if (error) {
              console.error(error);
          } else {
              setCookie('access_token', data.access_token); // Устанавливаем cookie с access_token
              history.push('/update-profile'); // Перенаправляем на страницу обновления профиля
          }
      });
  }

  return (
    <div className='login'>
        <div className='login-cont'>
                <div className='login-right'>
                    <div className='login-tit'>
                        <h3 className='log-title'>Подтверждение аккаунта</h3>
                        <p className='log-p'>Для входа в аккаунт или регистрации, мы пришлём <br />временный код вам на e-mail:</p>
                    </div>
                    <div className='log-form'>
                    <form>
                         <input className='log-input' type="email" placeholder="Введите адрес электронной почты" />
                         <Link to="/login/code">
                         <button className='log-button' type="submit">Проверить код</button>
                         </Link>
                         <div className='soc'>
                         <Link to="/">
                         <button className='log-but1' type="submit"><img className="svg" src={vk} alt="" /> Войти через VK</button>
                         </Link>
                         <Link to="/">
                         <button className='log-but' type="submit"> <img className="svg" src={gmail} alt="" /> Войти через Gmail</button>
                         </Link>
                         </div>
                    </form>
                    </div>
                </div>
                </div>
    </div>
  );
};

export default Login;
