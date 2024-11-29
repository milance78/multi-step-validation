import './Cards.css';
import React from 'react';
import { useContext } from 'react';
import { AllDataContext } from '../../contexts/AllDataContext';

const Result = () => {
    const {allData} = useContext(AllDataContext);
    return (
        <div className='card result'>
            <h2>Diet : <span>{allData.diet}</span></h2><br />
            <h2>Favorite food: <span>{allData.favorite.join(", ")}</span></h2><br />
            <h2>Allergies: <span>{allData.allergy.join(", ")}</span></h2><br />
            <h2>Love: <span>{allData.love.like}</span></h2>
            <h2>Hate: <span>{allData.love.dislike}</span></h2>
        </div>
    )
}

export default Result