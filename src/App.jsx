import './App.css';
import { useContext, useEffect } from 'react';
import AnimatedLine from './components/animatedLine/AnimatedLine';
import Allergy from './components/cards/Allergy';
import Diet from './components/cards/Diet';
import FavoriteFood from './components/cards/FavoriteFood';
import Love from './components/cards/Love';
import StartingCard from './components/cards/StartingCard';
import EndCard from './components/cards/EndCard';
import Result from './components/cards/Result';
import { StageContext } from './contexts/StageContext';

const App = () => {
  const { stage, setStage } = useContext(StageContext);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (stage < 6) { setStage(stage + 1) }
    };
  }
  useEffect(
    () => {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  )

  return (
    <div className='App'>
      <AnimatedLine />
      {stage === 0 ? <StartingCard /> :
        stage === 1 ? <Diet /> :
          stage === 2 ? <FavoriteFood /> :
            stage === 3 ? <Allergy /> :
              stage === 4 ? <Love /> :
                stage === 5 ? <EndCard /> :
                  stage === 6 ? <Result /> : ""}
    </div>
  )
}

export default App