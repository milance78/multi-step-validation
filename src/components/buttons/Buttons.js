import './Buttons.css'
import { useContext } from 'react';
import { LineContext } from '../../contexts/LineContext';
import { StageContext } from '../../contexts/StageContext';


const Buttons = () => {
  const { stage, setStage } = useContext(StageContext);
  const { lineGrowth, setLineGrowth } = useContext(LineContext);

  const switchStagesColor = () => {
    switch (stage) {
      case 2: setLineGrowth('coloured-line growth-25'); break;
      case 3: setLineGrowth('coloured-line growth-50'); break;
      case 4: setLineGrowth('coloured-line growth-75'); break;
      case 5: setLineGrowth('coloured-line growth-100'); break;
      default: setLineGrowth('coloured-line');
    }
  }
  const left = () => {
    if (stage > 0) {
      setStage(stage - 1);
      switchStagesColor();
    }
  }
  const right = () => {
    if (stage < 5) {
      setStage(stage + 1);
      switchStagesColor();
    }
  } 
  return (
    <div className="buttons">
      <button
        className="navigating-button"
        onClick={left}>
        &#8810;
      </button>
      <button className="navigating-button"
        onClick={right}>
        &#8811;
      </button>
    </div>

  )
}

export default Buttons