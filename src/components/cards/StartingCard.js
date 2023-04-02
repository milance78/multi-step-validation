import './Cards.css';
import { useContext } from 'react';
import { StageContext } from '../../contexts/StageContext';

const StartingCard = () => {
  const {stage, setStage} = useContext(StageContext);
  const startFunction = () => {
    setStage(stage + 1);
  }
  return (
    <div className='starting-card'>
       Welcome to our cyber kitchen &#128578;<br /><br /><br /> 
       <span>Let's make your taste buds happy!</span><br /><br /><br />
       <button className='start-button' onClick={startFunction}>START</button> 
    </div>
  )
}

export default StartingCard