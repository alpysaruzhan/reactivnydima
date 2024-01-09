import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import "./SellPage.css";
import { MarketApi, ProductApi } from 'market_place';
import { Instance, basePath } from '../GateWay/base';

const GameCategoryPag = () => {
    const { id } = useParams();
    const marketAPI = new MarketApi(Instance);
    const [options, setOptions] = useState([]);

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
            {options.map((option) => {
                { 
                    option.type === "SELECTOR" ? <div className="das">
                                  
                    </div> : 
                    <div>
                        
                    </div>
                }
            })}
        </div>
    );
}
export default GameCategoryPag;
