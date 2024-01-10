import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; 
import "./SellPage.css";
import { MarketApi, ProductApi } from 'market_place';
import { Instance, basePath } from '../GateWay/base';
import { RangeCharactersitics, SwitchCharactersitics, SelectorCharactersitics } from './components/characteristicsButtons';

const GameCategoryPag = () => {
    const { id } = useParams();
    const marketAPI = new MarketApi(Instance);
    const [options, setOptions] = useState([]);
    const [attributes, setAttributes] = useState([]);  // ????? очистится ли он?  
    const {navigate} = useNavigate()

    const addAttributes = (label, value) => { 
        setAttributes([...attributes, {label: value}])
    }

    const HandleSelectedCharcs = () => { 
        // потом при отправке формы отправить это вместе! 
        localStorage.setItem("productAttributes", JSON.stringify(attributes))

        setTimeout(() => navigate("/"), 500)
    }

    useEffect(() => {
        marketAPI.categoryGetCategoryByIdApiV1CategoryCategoryIdIdGet(id, (error, data, response) => {
            if (error) {
                console.error(error)
            } else {
                setOptions(data.options)
                console.log(data.options)
            }
        });
    }, [id]);

    return (
        <div className='cont8'>
            <SelectorCharactersitics options={options} addAttributes={addAttributes}/>
            <RangeCharactersitics options={options} addAttributes={addAttributes}/>
            <SwitchCharactersitics options={options} addAttributes={addAttributes}/>
            <button onClick={HandleSelectedCharcs}>Отправить</button>
        </div>
    );
}
export default GameCategoryPag;
