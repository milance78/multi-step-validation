import './Cards.css';
import { useContext } from 'react';
import { StageContext } from '../../contexts/StageContext';
import Button from '../button/Button';

const StartingCard = () => {
  const { stage, setStage } = useContext(StageContext);
  const startFunction = () => {
    setStage(stage + 1);
  }
  return (
    <div className='card starting-card'>
      <section className='introduction'>
        <h3>Welcome to our kitchen &#128578;</h3>
        <br />
        <h3>Let's make your taste buds happy!</h3>
      </section>
      <section className={'start-button'}>
        <Button
          buttonName={'start'}
          clickFunction={startFunction}
          additionalClass={''} />
      </section>
    </div>
  )
}

export default StartingCard