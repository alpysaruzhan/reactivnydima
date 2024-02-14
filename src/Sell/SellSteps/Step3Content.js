import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./category.css";
import { MarketApi } from 'market_place';
import { Instance } from '../../GateWay/base';
import { RangeCharactersitics, SwitchCharactersitics, SelectorCharactersitics } from '../components/characteristicsButtons';

const Step3ContentPage = ({ handleStepChange }) => {
    const marketAPI = new MarketApi(Instance);
    const [options, setOptions] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState(null);
    let categoryName = localStorage.getItem("selectedCategoryName");
    const [category, setCategory] = useState([]);

    const addAttributes = (label, value) => {
        const updatedAttributes = [...attributes, { label, value }];
        setAttributes(updatedAttributes);
        localStorage.setItem('selectedAttributes', JSON.stringify(updatedAttributes));
    }

    useEffect(() => {
        marketAPI.categoryGetCategoryByNameApiV1CategoryCategoryNameNameGet(categoryName, (error, data, response) => {
            if (error) {
                console.error(error)
            } else {
                setOptions(data.options);
                console.log(data.options);
                setCategory(data);
                console.log(data);
            }
        });
    }, [categoryName]);

    const handleLabelClick = (option) => {
        setSelectedLabel(option.field);
        addAttributes(option.field, option.value);
    };

    return (
        <div className='sellall-con'>
            <h1 className='h-cat'  onClick={() => handleStepChange(2)} >&lt;Характеристики: </h1>

            <h2 className='h2-cat'>{category.name}</h2>
            <SelectorCharactersitics options={options} onLabelClick={handleLabelClick} />
            <RangeCharactersitics options={options} addAttributes={addAttributes} />
            <SwitchCharactersitics options={options} addAttributes={addAttributes} />
            <button onClick={() => { console.log('Button clicked'); handleStepChange(4); }} className='butcat'>
                Далее
            </button>

        </div>
    );
}

export default Step3ContentPage;
