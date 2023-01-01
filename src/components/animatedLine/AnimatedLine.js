import './AnimatedLine.css';
import { useState, useEffect } from 'react';
import healthy from './icons/healthy.svg';
import allergy from './icons/allergy.svg';
import diet from './icons/diet.svg';
import love from './icons/love.svg';
import thumb from './icons/thumb.svg';

const AnimatedLine = ({stageProp:{stage, setStage}}) => {

  const [lineGrowth, setLineGrowth] = useState('coloured-line');  

  useEffect(()=>{
    switchStagesColor();
  },[stage])

  const switchStagesColor = () => {
    switch (stage) {
      case 1: setLineGrowth('coloured-line growth-25'); break;
      case 2: setLineGrowth('coloured-line growth-50'); break;
      case 3: setLineGrowth('coloured-line growth-75'); break;
      case 4: setLineGrowth('coloured-line growth-100'); break;
      default: setLineGrowth('coloured-line')
    }
  }

  const left = () => {
    if (stage > 0) {
      setStage(stage - 1);
      switchStagesColor();
    }

  }

  const right = () => {
    if (stage < 4) {
      setStage(stage + 1);    
      switchStagesColor();
      console.log(lineGrowth);
    }
  }

  return (
    <div className='animated-line'>
      <div className="icons-container">
        <div className="icon"><img src={healthy} alt="healthy" /></div>
        <div className="icon"><img src={love} alt="love" /></div>
        <div className="icon"><img src={allergy} alt="allergy" /></div>
        <div className="icon"><img src={diet} alt="diet" /></div>
        <div className="icon"><img src={thumb} alt="thumb" /></div>
      </div>
      <div className="line"></div>
      <div className={lineGrowth}></div>
      <div className="navigating-buttons-container">
        <button
          className="navigating-button"
          onClick={left}>
          levo
        </button>
        <button className="navigating-button"
          onClick={right}>
          desno
        </button>
      </div>
    </div>
  )
}

export default AnimatedLine