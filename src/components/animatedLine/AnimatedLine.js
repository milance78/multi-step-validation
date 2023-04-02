import './AnimatedLine.css';
import { useEffect, useContext } from 'react';
import healthy from './icons/healthy.svg';
import allergy from './icons/allergy.svg';
import diet from './icons/diet.svg';
import love from './icons/love.svg';
import thumb from './icons/thumb.svg';
import { LineContext } from '../../contexts/LineContext';
import { StageContext } from '../../contexts/StageContext';

const AnimatedLine = () => {

  const { stage, setStage } = useContext(StageContext);
  const { lineGrowth, setLineGrowth } = useContext(LineContext);

  useEffect(() => {
    switchStagesColor();
  }, [stage])

  const switchStagesColor = () => {
    switch (stage) {
      case 2: setLineGrowth('coloured-line growth-25'); break;
      case 3: setLineGrowth('coloured-line growth-50'); break;
      case 4: setLineGrowth('coloured-line growth-75'); break;
      case 5: setLineGrowth('coloured-line growth-100'); break;
      case 6: setLineGrowth('coloured-line growth-100'); break;
      default: setLineGrowth('coloured-line');
    }
  }
  const onClickHandler = (button) => {
    // if (button === 'healthy'){setStage(1)}
    // else if (button === 'love'){setStage(2)}
    switch (button) {
      case 'healthy': setStage(1); break;
      case 'love': setStage(2); break;
      case 'allergy': setStage(3); break;
      case 'diet': setStage(4); break;
      case 'thumb': setStage(5); break;
      default: setStage(0);
    }
  }
  return (
    <div className='animated-line'>
      <div className="icons-container">
        <div className="icon healthy" onClick={()=>onClickHandler('healthy')}>
          <img src={healthy} alt="healthy" />
        </div>
        <div className="icon love" onClick={()=>onClickHandler('love')}>
          <img src={love} alt="love" />
        </div>
        <div className="icon allergy" onClick={()=>onClickHandler('allergy')}>
          <img src={allergy} alt="allergy" />
        </div>
        <div className="icon diet" onClick={()=>onClickHandler('diet')}>
          <img src={diet} alt="diet" />
        </div>
        <div className="icon thumb" onClick={()=>onClickHandler('thumb')}>
          <img src={thumb} alt="thumb" />
        </div>
      </div>
      <div className="line"></div>
      <div className={lineGrowth}></div>
      <div className="navigating-buttons-container"></div>
    </div>
  )
}

export default AnimatedLine