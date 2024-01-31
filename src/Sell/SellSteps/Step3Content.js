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
    let categoryId = localStorage.getItem("selectedCategoryId");
    const [category, setCategory] = useState([]);

    const addAttributes = (label, value) => {
        const updatedAttributes = [...attributes, { label, value }];
        setAttributes(updatedAttributes);
        localStorage.setItem('selectedAttributes', JSON.stringify(updatedAttributes));
    }

    useEffect(() => {
        marketAPI.categoryGetCategoryByIdApiV1CategoryCategoryIdIdGet(categoryId, (error, data, response) => {
            if (error) {
                console.error(error)
            } else {
                setOptions(data.options);
                console.log(data.options);
                setCategory(data);
                console.log(data);
            }
        });
    }, [categoryId]);

    const handleLabelClick = (label) => {
        setSelectedLabel(label);
        addAttributes(label, 'someValue');
    };

    return (
        <div className='sellall-con'>
            <div onClick={() => handleStepChange(2)}>
                <h1 className='h-cat'>&lt; Характеристики:</h1>
            </div>
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
