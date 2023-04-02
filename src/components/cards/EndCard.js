import './Cards.css';
import { useContext } from 'react';
import { StageContext } from '../../contexts/StageContext';

const EndCard = () => {
  const {stage, setStage} = useContext(StageContext);
  const resultFunction = () => {
    setStage(stage + 1)
  }
  const backFunction = () => {
    setStage(stage - 1)
  }
  return (
    <div className='end-card'>
       Thank you for filling out the form &#128578;<br /><br /><br /> 
       <span>Have a good day and enjoy your meal !</span><br /><br /><br />
       <button className='result-button' onClick={resultFunction}>RESULT</button>
       <button className='end-button' onClick={backFunction}>&#8810;</button>  
    </div>
  )
}

export default EndCard