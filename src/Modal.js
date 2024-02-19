
import React, { useState, useEffect } from 'react';
import './Modal.css'; // подключаем файл стилей
import {  PaymentApi } from 'market_place';
import { Instance } from './GateWay/base';

const Modal = ({ isOpen, onClose, product_id  }) => {
    // Создаем состояние для хранения выбранного приложения
    const [selectedApp, setSelectedApp] = useState(null);
    const [applications, setApplications] = useState(null);

    // Обработчик изменения состояния выбора приложения
    const handleAppSelection = (appName) => {
        setSelectedApp(appName);
    };
    const payment = new PaymentApi(Instance)

    useEffect(() => {
        payment.getProvidersApiV1ProvidersGet( (error, data, response) => {
            if (error) {
                console.error(error)
            } else {
                console.log("PaymentApi", data.objects)
                setApplications(data.objects)
            }
        })
    }, [])

    // const applications = [
    //     { id: 1, name: 'App 1', icon: 'icon1.png' },
    //     { id: 2, name: 'App 2', icon: 'icon2.png' },
    //     { id: 3, name: 'App 3', icon: 'icon3.png' },
    //     // Add more applications as needed
    // ];
    // console.log("Выбранное product_id:", product_id);

    // Обработчик кнопки "Выбрать"
    const handleSelect = () => {
        // Делаем что-то с выбранным приложением
        console.log("Выбранное приложение:", selectedApp);
            
        payment.initiatePurchaseApiV1PurchaseProductIdPost(product_id, selectedApp.id, (error, data, response) => {
            if (error) {
                console.error(error)
            } else {
                console.log("initiate purches", data.objects)
                setApplications(data.objects)
            }
        })


        onClose();
    };

    return (
        // Рендерим модальное окно только если isOpen === true
        isOpen && (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>Выберите способ оплаты</h2>
                        <button className="close-btn" onClick={onClose}>×</button>
                    </div>
                    <div className="modal-body">
                        {/* Рендер списка приложений */}
                        <ul>
                            {applications.map((app) => (
                                <li
                                    key={app.id}
                                    onClick={() => handleAppSelection(app)}
                                    className={selectedApp === app ? "selected" : ""}
                                >
                                    {/* <img src={app.icon} alt={app.name} /> */}
                                    <span>{app.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleSelect}>Выбрать</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
