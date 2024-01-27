import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./category.css";
import { MarketApi } from 'market_place';
import { Instance } from '../../GateWay/base';
import { RangeCharactersitics, SwitchCharactersitics, SelectorCharactersitics } from '../components/characteristicsButtons';

const Step3ContentPage = ({ handleStepChange }) => {
    const { id } = useParams();
    const marketAPI = new MarketApi(Instance);
    const [options, setOptions] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [category, setCategory] = useState([]);


    const addAttributes = (label, value) => {
        setAttributes([...attributes, { label: value }]);
    }

    const HandleSelectedCharcs = () => {
        localStorage.setItem("productAttributes", JSON.stringify(attributes));
        setTimeout(() => navigate("/photo"), 500);
    }

    useEffect(() => {
        marketAPI.categoryGetCategoryByIdApiV1CategoryCategoryIdIdGet(id, (error, data, response) => {
            if (error) {
                console.error(error)
            } else {
                setOptions(data.options)
                console.log(data.options)
                setCategory(data)
                console.log(data)
            }
        });
    }, [id]);

    return (
        <div className='sellall-con'>
            <div onClick={() => handleStepChange(2)}>
            <h1 className='h-cat'>&lt; Характеристики:</h1>
            </div>
            <h2 className='h2-cat'>{category.name}</h2>
            <SelectorCharactersitics options={options} addAttributes={addAttributes} />
            <RangeCharactersitics options={options} addAttributes={addAttributes} />
            <SwitchCharactersitics options={options} addAttributes={addAttributes} />
            <button className='butcat' onClick={HandleSelectedCharcs}>Далее</button>
        </div>
    );
}

export default Step3ContentPage;
