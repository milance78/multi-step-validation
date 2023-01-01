import './App.css';
import AnimatedLine from './components/animatedLine/AnimatedLine';
import Allergy from './components/cards/Allergy';
import Diet from './components/cards/Diet';
import Healthy from './components/cards/Healthy';
import Love from './components/cards/Love';
import StartingCard from './components/cards/StartingCard';
import EndCart from './components/cards/EndCart';

import { useState } from 'react';

const App = () => {

  const [stage, setStage] = useState(0);
  
  return (
    <div>
      <AnimatedLine stageProp={{stage, setStage}}/>
      <div className='card'>
        {stage===0?<StartingCard/>:stage===1?<Healthy/>:stage===2?<Love />:stage===3?<Allergy />:stage===4?<Diet />:""}
      </div>
    </div>
  )
}

export default App