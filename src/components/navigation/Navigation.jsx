import React, { useContext } from 'react'
import './Navigation.css'
import { StageContext } from '../../contexts/StageContext';
import { forwardFunction, backFunction } from '../../functions.js';
import Button from '../button/Button.jsx';

const Navigation = () => {

    const { stage, setStage } = useContext(StageContext);

    return (
        <section className='navigation'>
            <Button buttonName={'<<'}
                clickFunction={() => backFunction(stage, setStage)}
                additionalClass={'back-button'} />
            <Button buttonName={'>>'}
                clickFunction={() => forwardFunction(stage, setStage)}
                additionalClass={'forward-button'} />
        </section>
    )
}

export default Navigation