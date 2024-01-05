import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { AuthApi } from 'market_place';
import { Instance } from "../GateWay/base";
import { useHistory } from 'react-router-dom';

const EnterTempPassword = () => {
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
                setCookie('access_token', data.access_token); 
                history.push('/update-profile');
            }
        });
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="password"
                    placeholder="Введите временный пароль"
                    value={tempPassword}
                    onChange={(e) => setTempPassword(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};
export default EnterTempPassword;
